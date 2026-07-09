import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex flex-col gap-5 h-full justify-center max-w-sm mx-auto">
      <h1 className="text-heading leading-8 font-bold">Acessar conta</h1>
      <div className="flex flex-col gap-1">
        <label className="text-label-medium leading-5.5 font-medium" htmlFor="">
          E-mail
        </label>
        <input
          className="bg-background-secondary border border-border-primary text-medium h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body"
          type="email"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-label-medium leading-5.5 font-medium">
          Senha
        </label>
        <input
          className="bg-background-secondary border border-border-primary h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body"
          type="password"
          placeholder="Insira sua senha"
        />
      </div>

      <div className="text-medium">
        <p className="text-content-body">
          Não tem uma conta ?{" "}
          <Link to="/register">
            <span className="text-accent-brand font-semibold">Criar conta</span>
          </Link>
        </p>
      </div>
      <button className="bg-accent-brand text-content-inverse h-11.5 rounded-xl text-label-medium font-bold">
        Acessar conta
      </button>
    </div>
  );
}

export default LoginPage;
