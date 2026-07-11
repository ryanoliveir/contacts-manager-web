import { Link } from "react-router-dom";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";

function RegisterPage() {
  return (
    <div className="flex flex-col gap-5 h-full  py-5 justify-center max-w-sm mx-auto font-medium">
      <h1 className="text-heading leading-8 font-bold">Criar conta</h1>
      <div className="flex flex-col gap-1">
        <Label>Nome</Label>
        <Input type="text" placeholder="Digite seu nome." />
      </div>
      <div className="flex flex-col gap-1">
        <Label>E-mail</Label>
        <Input type="text" placeholder="Digite seu e-mail" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Senha</Label>
        <Input type="password" placeholder="Insira sua senha" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Repetir senha</Label>
        <Input type="password" placeholder="Insira novamente sua senha." />
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
      <Button>Criar conta</Button>
    </div>
  );
}

export default RegisterPage;
