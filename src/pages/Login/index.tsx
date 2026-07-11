import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="flex flex-col gap-5 h-full py-5 sm:justify-center max-w-sm mx-auto">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
