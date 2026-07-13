import { useState } from "react";
import LogoMinimal from "../../assets/LogoMinimal.png";
import Logo from "../../assets/Logo.png";
import { UsersRound, Settings, LogOut } from "lucide-react";
import { cn } from "../../libs/cn";
import { AnimatePresence, motion } from "motion/react";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div
      className="min-h-screen bg-background-primary"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="flex h-screen">
        <div
          className={cn(
            " flex  py-6 flex-col justify-between px-4 transition-all duration-300",
            isCollapsed ? "w-18" : "w-56",
          )}
        >
          <div className="flex flex-col gap-10 items-start">
            {isCollapsed ? (
              <img src={LogoMinimal} className="px-1 h-8 w-auto" alt="" />
            ) : (
              <img src={Logo} className="px-1 h-8 w-auto" alt="" />
            )}
            <div className="w-full">
              <ul className=" flex flex-col gap-6">
                <motion.li
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "px-3 py-2 rounded-xl flex items-center justify-start text-content-inverse gap-2 bg-accent-brand overflow-hidden",
                    isCollapsed
                      ? "justify-center w-10 h-10 p-2"
                      : "justify-start gap-3 px-3 py-2 w-full",
                  )}
                >
                  <UsersRound className="shrink-0" size={20} />
                  <AnimatePresence>
                    {!isCollapsed && <span>Contatos</span>}
                  </AnimatePresence>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "px-3 py-2 rounded-xl flex items-center justify-start text-contenct-muted gap-2 overflow-hidden",
                    isCollapsed
                      ? "justify-center w-10 h-10 p-2"
                      : "justify-start gap-3 px-3 py-2 w-full",
                  )}
                >
                  <Settings className="shrink-0" size={20} />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap"
                      >
                        Configurações
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </div>
          </div>
          <div
            className={cn(
              "px-3 py-2 rounded-xl flex items-center text-contenct-muted gap-2",
              isCollapsed
                ? "justify-center w-10 h-10 p-2"
                : "justify-start gap-3 px-3 py-2 w-full",
            )}
          >
            <LogOut className="" size={20} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  Sair
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
