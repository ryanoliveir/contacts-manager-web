import Logo from "../../assets/Logo.png";
import Line from "../../assets/Line.png";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="flex flex-col sm:flex sm:flex-row sm:w-full h-screen">
        <div className="w-full h-1/2  sm:w-3/5 sm:h-full relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-100"
            src={Line}
            alt=""
          />
          <div className="relative p-10">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="text-content-primary flex-1 py-4 px-4 sm:h-screen sm:px-22 sm:py-14 bg-background-secondary rounded-t-3xl -mt-50 sm:mt-0 sm:rounded-none z-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
