import { useContactStore } from "../../store/contacts";
import ContactCard from "../ContactCard";

function CardSection() {
  const { contacts, isUnlocked } = useContactStore();
  const hasContacts = contacts.length > 0;
  return (
    <section className="">
      <div className="hidden md:grid md:grid-cols-6 px-3 md:gap-4 text-label-small text-contenct-muted pb-5 font-semibold">
        <span className="col-span-2">Nome</span>
        <span className="col-span-1">Telefone</span>
        <span className="col-span-2">E-mail</span>
        <span className="col-span-1 text-left">Ações</span>
      </div>
      <div className="flex flex-col gap-5">
        {hasContacts ? (
          contacts.map((contact) => {
            return <ContactCard key={contact.id} {...contact} />;
          })
        ) : (
          <div>Sem contatos ainda</div>
        )}
      </div>
    </section>
  );
}

export default CardSection;
