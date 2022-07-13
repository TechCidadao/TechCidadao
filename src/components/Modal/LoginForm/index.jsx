import { Container, StyledFormLogin, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField, IconButton } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import TechCidadaoAPI from "services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserInfo } from "providers/userInfo";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { getUserInfo } = useUserInfo();
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Você precisa colocar seu endereço eletrônico."),
    password: yup.string().required("Você precisa colocar sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    TechCidadaoAPI.post(`/login`, data)
      .then((res) => {
        getUserInfo(res.data.accessToken, res.data.user.name);
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error("Senha ou endereço eletrônico incorretos");
      });
  };

  return (
    <Container>
      <ThemeText>Preencha para entrar, se você já tem cadastro</ThemeText>
      <StyledFormLogin onSubmit={handleSubmit(onSubmitFunction)}>
        <label>E-mail</label>
        <TextField
          {...register("email")}
          placeholder="Seu endereço eletronico"
          style={{ width: "90%" }}
        />
        <p>{errors.email?.message}</p>
        <label>Senha</label>
        <TextField
          {...register("password")}
          placeholder="Coloque sua senha"
          style={{ width: "90%" }}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <p>{errors.password?.message}</p>
        <ThemeButton type="submit">Aperte para entrar</ThemeButton>
      </StyledFormLogin>
    </Container>
  );
};
