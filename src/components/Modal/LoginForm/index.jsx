import { FlexBox, StyledForm, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import TechCidadaoAPI from "services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
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
        localStorage.setItem("@TC:token", res.data.accessToken);
        localStorage.setItem("@TC:username", res.data.user.name);
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error("Senha ou endereço eletrônico incorretos");
      });
  };

  return (
    <FlexBox>
      <ThemeText>Preencha para entrar, se você já tem cadastro</ThemeText>
      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          {...register("email")}
          label="Email"
          placeholder="Seu endereço eletronico"
          helperText={errors.email?.message}
          style={{ width: "90%" }}
        />
        <TextField
          {...register("password")}
          label="Senha"
          placeholder="Coloque sua senha"
          helperText={errors.password?.message}
          style={{ width: "90%" }}
        />
        <ThemeButton type="submit">Aperte para entrar</ThemeButton>
      </StyledForm>
    </FlexBox>
  );
};
