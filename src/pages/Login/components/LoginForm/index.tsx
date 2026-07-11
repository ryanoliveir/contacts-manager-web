import { Link } from "react-router-dom";
import Input from "../../../../components/Input";
import Label from "../../../../components/Label";
import Button from "../../../../components/Button";
import { useForm } from "react-hook-form";
import {
  type LoginFormSchema,
  loginFormSchema,
} from "../../../../schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "../../../../components/PasswordInput";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmitLoginForm(data: LoginFormSchema) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitLoginForm)} className="contents">
        <h1 className="text-heading leading-8 font-bold">Acessar conta</h1>
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

        <div className="text-medium mt-auto sm:mt-0 order-last sm:order-0 text-center">
          <p className="text-content-body">
            Não tem uma conta ?{" "}
            <Link to="/register">
              <span className="text-accent-brand font-semibold">
                Criar conta
              </span>
            </Link>
          </p>
        </div>
        <Button type="submit">Acessar conta</Button>
      </form>
    </>
  );
}

export default LoginForm;
