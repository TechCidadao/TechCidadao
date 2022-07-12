import { FlexBox, StyledForm, ThemeButton, ThemeText } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import TechCidadaoAPI from "services/api";
import { toast } from "react-toastify";

export const RegistrationForm = ({ setSelectType }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Você precisa colocar seu endereço eletrônico."),
    password: yup.string().required("Você precisa colocar sua senha"),
    name: yup.string().required("Você precisa colocar seu nome"),
    age: yup.string().required("Você precisa colocar sua idade"),
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
        <TextField
          {...register("email")}
          placeholder="Seu endereço eletronico"
          helperText={errors.email?.message}
          style={{ width: "90%" }}
        />

        <TextField
          {...register("password")}
          placeholder="Coloque sua senha"
          helperText={errors.password?.message}
          style={{ width: "90%" }}
        />

        <TextField
          {...register("name")}
          placeholder="Como quer ser chamado?"
          helperText={errors.name?.message}
          style={{ width: "90%" }}
        />

        <TextField
          {...register("age")}
          placeholder="Qual a sua idade?"
          helperText={errors.age?.message}
          style={{ width: "90%" }}
        />
        <ThemeButton type="submit">Aperte para cadastrar</ThemeButton>
      </StyledForm>
    </FlexBox>
  );
};
