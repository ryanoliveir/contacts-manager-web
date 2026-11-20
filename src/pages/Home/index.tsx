import { Plus } from "lucide-react";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import GuardMobileIcon from "../../assets/guard-icon-app.svg";
import LockToggle from "../../components/LockToogle";
import CardSection from "../../components/CardSection";

function Home() {
  const [toggleLockInfo, setToggleLockInfo] = useState(true);

  function handleToggleLockInfo() {
    setToggleLockInfo(!toggleLockInfo);
  }

  return (
    <div className="py-4 px-6 md:p-10 flex flex-col gap-10">
      <div className="gap-y-4 text-content-primary flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center justify-between md:justify-center">
          <img src={GuardMobileIcon} alt="" className="w-5 h-5 md:hidden" />
          <div className="font-bold text-heading">Lista de Contatos</div>
          <LockToggle
            isLock={toggleLockInfo}
            className="md:hidden"
            onToggle={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center">
          <SearchInput />
          <button className="hidden md:flex gap-2  items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary ">
            <Plus size={18} />
            Adicionar contato
          </button>
          <LockToggle
            onToggle={handleToggleLockInfo}
            isLock={toggleLockInfo}
            className="hidden md:block"
          />
        </div>
      </div>
      <CardSection />
    </div>
  );
}

export default Home;
