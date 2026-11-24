import { Plus } from "lucide-react";
import SearchInput from "../../components/SearchInput";
import GuardMobileIcon from "../../assets/guard-icon-app.svg";
import LockToggle from "../../components/LockToogle";
import CardSection from "../../components/CardSection";
import { useContactStore } from "../../store/contacts";
import UnlockModal from "../../components/UnlockModal";
import { useState } from "react";
import ContactForm from "../../components/ContactForm";

function Home() {
  const { isUnlocked, toggleGlobalUnlock } = useContactStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleUnlockModal() {
    if (isUnlocked) {
      toggleGlobalUnlock();
      return;
    }
    setIsModalOpen(true);
  }

  function handleConfirmPassword() {
    setIsModalOpen(false);
    toggleGlobalUnlock();
  }

  return (
    <div className="py-4 px-6 md:p-10 flex flex-col gap-10">
      <div className="gap-y-4 text-content-primary flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center justify-between md:justify-center">
          <img src={GuardMobileIcon} alt="" className="w-5 h-5 md:hidden" />
          <div className="font-bold text-heading">Lista de Contatos</div>
          <LockToggle
            className="md:hidden"
            onToggle={handleUnlockModal}
            isLock={isUnlocked}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center">
          <SearchInput value={search} onChange={setSearch} />
          <button
            className="fixed bottom-20 md:bottom-auto md:right-auto right-6 w-14 h-14 rounded-full md:text-inherit flex justify-center text-content-inverse md:w-auto md:h-auto md:relative md:flex gap-2  items-center md:py-2 md:p-3 md:pr-4 md:rounded-lg bg-accent-brand md:bg-background-tertiary shadow-[0_0_20px_rgba(196,241,32,0.6)] md:shadow-none"
            onClick={() => setIsContactFormOpen(true)}
          >
            <Plus size={18} />
            <span className="hidden md:block">Adicionar contato</span>
          </button>
          <LockToggle
            className="hidden md:block"
            onToggle={handleUnlockModal}
            isLock={isUnlocked}
          />
        </div>
      </div>
      <CardSection search={search} />
      {isModalOpen && (
        <UnlockModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleConfirmPassword}
        />
      )}
      {isContactFormOpen && (
        <ContactForm
          onClose={() => setIsContactFormOpen(false)}
          onSuccess={() => setIsContactFormOpen(false)}
        />
      )}
      {}
    </div>
  );
}

export default Home;
