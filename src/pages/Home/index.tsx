import {
  Plus,
  Phone,
  Mail,
  Pencil,
  // LockKeyhole,
  LockKeyholeOpen,
  Trash,
} from "lucide-react";
import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import GuardMobileIcon from "../../assets/guard-icon-app.svg";
import LockToggle from "../../components/LockToogle";

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
            onToggle={handleToggleLockInfo}
            isLock={toggleLockInfo}
            className="md:hidden"
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
      <section className="flex flex-col gap-5">
        <div className="md:hidden">
          <div className="bg-background-secondary flex flex-col gap-5 p-3 rounded-[14px]">
            <div className="flex gap-3">
              <div className="md:hidden w-11.5 h-11.5 bg-lime-950 rounded-full items-center flex justify-center text-amber-50 font-semibold text-medium">
                AS
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-content-body text-label-medium font-semibold">
                  Contact Name
                </p>
                <div className="bg-background-tertiary rounded-2xl px-10 text-content-heading text-small w-17 h-4.5 flex justify-center">
                  Família
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-label-medium text-content-body">
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-contenct-muted" />
                <span>(12) 99102-2939</span>
              </div>
              <div className="flex gap-2 items-center ">
                <Mail size={16} className="text-contenct-muted" />
                <span>you@mail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <button className="flex gap-2 w-19.5 h-8 text-small items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary text-white">
                <Pencil size={18} />
                Editar
              </button>
              <button className="rounded-full h-10 px-3 text-accent-brand bg-lime-950">
                <LockKeyholeOpen size={18} />
              </button>

              <button className="rounded-full h-10 px-3 bg-background-tertiary text-white hover:bg-red-950 hover:text-red-400">
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-background-secondary flex flex-col gap-5 p-3 rounded-[14px]">
            <div className="flex gap-3">
              <div className="md:hidden w-11.5 h-11.5 bg-lime-950 rounded-full items-center flex justify-center text-amber-50 font-semibold text-medium">
                AS
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-content-body text-label-medium font-semibold">
                  Contact Name
                </p>
                <div className="bg-background-tertiary rounded-2xl px-10 text-content-heading text-small w-17 h-4.5 flex justify-center">
                  Família
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-label-medium text-content-body">
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-contenct-muted" />
                <span>(12) 99102-2939</span>
              </div>
              <div className="flex gap-2 items-center ">
                <Mail size={16} className="text-contenct-muted" />
                <span>you@mail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <button className="flex gap-2 w-19.5 h-8 text-small items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary text-white">
                <Pencil size={18} />
                Editar
              </button>
              <button className="rounded-full h-10 px-3 text-accent-brand bg-lime-950">
                <LockKeyholeOpen size={18} />
              </button>

              <button className="rounded-full h-10 px-3 bg-background-tertiary text-white hover:bg-red-950 hover:text-red-400">
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-background-secondary flex flex-col gap-5 p-3 rounded-[14px]">
            <div className="flex gap-3">
              <div className="md:hidden w-11.5 h-11.5 bg-lime-950 rounded-full items-center flex justify-center text-amber-50 font-semibold text-medium">
                AS
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-content-body text-label-medium font-semibold">
                  Contact Name
                </p>
                <div className="bg-background-tertiary rounded-2xl px-10 text-content-heading text-small w-17 h-4.5 flex justify-center">
                  Família
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-label-medium text-content-body">
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-contenct-muted" />
                <span>(12) 99102-2939</span>
              </div>
              <div className="flex gap-2 items-center ">
                <Mail size={16} className="text-contenct-muted" />
                <span>you@mail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <button className="flex gap-2 w-19.5 h-8 text-small items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary text-white">
                <Pencil size={18} />
                Editar
              </button>
              <button className="rounded-full h-10 px-3 text-accent-brand bg-lime-950">
                <LockKeyholeOpen size={18} />
              </button>

              <button className="rounded-full h-10 px-3 bg-background-tertiary text-white hover:bg-red-950 hover:text-red-400">
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
