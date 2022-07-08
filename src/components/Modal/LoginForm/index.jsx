import { FlexBox, StyledForm, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm = () => {
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
    console.log(data);
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
        />
        <TextField
          {...register("password")}
          label="Senha"
          placeholder="Coloque sua senha"
          helperText={errors.password?.message}
        />
        <ThemeButton type="submit">Aperte para entrar</ThemeButton>
      </StyledForm>
    </FlexBox>
  );
};
