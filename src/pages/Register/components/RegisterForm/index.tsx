import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Label from "../../../../components/Label";
import { useForm } from "react-hook-form";
import {
  registerFormSchema,
  type RegisterFormSchema,
} from "../../../../schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "../../../../components/PasswordInput";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  function onSubmitRegisterForm(data: RegisterFormSchema) {
    console.log(data);
  }
  return (
    <form className="contents" onSubmit={handleSubmit(onSubmitRegisterForm)}>
      <h1 className="text-heading leading-8 font-bold">Criar conta</h1>
      <div className="flex flex-col gap-1">
        <Label>Nome</Label>
        <Input
          {...register("name")}
          type="text"
          placeholder="Digite seu nome."
        />
        {errors.name && (
          <span className="text-accent-red text-small">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label>E-mail</Label>
        <Input
          {...register("email")}
          type="text"
          placeholder="Digite seu e-mail"
        />
        {errors.email && (
          <span className="text-accent-red text-small">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label>Senha</Label>
        <PasswordInput
          {...register("password")}
          type="password"
          placeholder="Insira sua senha"
        />
        {errors.password && (
          <span className="text-accent-red text-small">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label>Repetir senha</Label>
        <PasswordInput
          {...register("confirmPassword")}
          type="password"
          placeholder="Insira novamente sua senha."
        />
        {errors.confirmPassword && (
          <span className="text-accent-red text-small">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="text-medium mt-auto sm:mt-0 order-last sm:order-0 text-center">
        <p className="text-content-body">
          Já tem uma conta ?{" "}
          <Link to="/login">
            <span className="text-accent-brand font-semibold">
              Acesar conta
            </span>
          </Link>
        </p>
      </div>
      <Button type="submit">Criar conta</Button>
    </form>
  );
}

export default RegisterForm;
