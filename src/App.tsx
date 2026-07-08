import Logo from "./assets/Logo.png";

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="flex w-full">
        <div className="w-3/5 h-screen">
          <div className="p-10">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="text-content-primary flex-1 h-screen px-22 py-14 bg-background-secondary">
          <div className="flex flex-col gap-5 h-full justify-center max-w-sm mx-auto">
            <h1 className="text-heading leading-8 font-bold">Acessar conta</h1>
            <div className="flex flex-col gap-1">
              <label className="text-label-medium leading-5.5" htmlFor="">
                E-mail
              </label>
              <input
                className="bg-background-secondary border border-border-primary h-10 p-3 rounded-lg"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-label-medium leading-5.5">Senha</label>
              <input
                className="bg-background-secondary border border-border-primary h-10 p-3 rounded-lg"
                type="password"
                placeholder="Insira sua senha"
              />
            </div>

            <div className="text-medium">
              <p>
                Não tem uma conta ?{" "}
                <a href="/">
                  <span className="text-accent-brand ">Criar conta</span>
                </a>
              </p>
            </div>
            <button className="bg-accent-brand text-content-inverse h-11.5 rounded-xl text-label-medium">
              Acessar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
