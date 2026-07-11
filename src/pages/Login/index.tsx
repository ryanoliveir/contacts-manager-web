import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";

function LoginPage() {
  return (
    <div className="flex flex-col gap-5 h-full justify-center max-w-sm mx-auto">
      <h1 className="text-heading leading-8 font-bold">Acessar conta</h1>
      <div className="flex flex-col gap-1">
        <Label>E-mail</Label>
        <Input type="text" placeholder="Digite seu e-mail" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Senha</Label>
        <Input type="text" placeholder="Insira sua senha" />
      </div>

      <div className="text-medium">
        <p className="text-content-body">
          Não tem uma conta ?{" "}
          <Link to="/register">
            <span className="text-accent-brand font-semibold">Criar conta</span>
          </Link>
        </p>
      </div>
      <Button>Acessar conta</Button>
    </div>
  );
}

export default LoginPage;
