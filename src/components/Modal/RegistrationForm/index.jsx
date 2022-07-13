import { FlexBox, StyledForm, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField, IconButton } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import TechCidadaoAPI from "services/api";
import { toast } from "react-toastify";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const RegistrationForm = ({ setSelectType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Você precisa colocar seu endereço eletrônico!")
      .email("E-mail não existente"),
    password: yup.string().required("Você precisa colocar sua senha!"),
    name: yup.string().required("Você precisa colocar seu nome!"),
    age: yup.string().required("Você precisa colocar sua idade!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    TechCidadaoAPI.post(`/register`, data)
      .then((res) => res)
      .catch((error) => {
        toast.error("Algo está errado, tente novamente mais tarde");
      });

    setSelectType("success");
  };

  return (
    <FlexBox>
      <ThemeText>Preencha para entrar, se você já tem cadastro</ThemeText>
      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
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
        <label>Nome</label>
        <TextField
          {...register("name")}
          placeholder="Como quer ser chamado?"
          style={{ width: "90%" }}
        />
        <p>{errors.name?.message}</p>
        <label>Idade</label>
        <TextField
          {...register("age")}
          placeholder="Qual a sua idade?"
          style={{ width: "90%" }}
        />
        <p>{errors.age?.message}</p>
        <ThemeButton type="submit">Aperte para cadastrar</ThemeButton>
      </StyledForm>
    </FlexBox>
  );
};
