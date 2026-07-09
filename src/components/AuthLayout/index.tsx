import Logo from "../../assets/Logo.png";
import Line from "../../assets/Line.png";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="flex w-full">
        <div className="w-3/5 h-screen relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-100"
            src={Line}
            alt=""
          />
          <div className="relative p-10">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="text-content-primary flex-1 h-screen px-22 py-14 bg-background-secondary">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
