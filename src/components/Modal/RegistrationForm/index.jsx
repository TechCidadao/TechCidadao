import { FlexBox, StyledForm, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegistrationForm = () => {
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
          label="Seu email"
          placeholder="Seu endereço eletronico"
        />
        <TextField
          {...register("password")}
          label="Sua senha"
          placeholder="Coloque sua senha"
        />
        <TextField
          {...register("name")}
          label="Seu nome"
          placeholder="Como quer ser chamado?"
        />
        <TextField
          {...register("age")}
          label="Idade"
          placeholder="Qual a sua idade?"
        />
        <ThemeButton type="submit">Aperte para cadastrar</ThemeButton>
      </StyledForm>
    </FlexBox>
  );
};
