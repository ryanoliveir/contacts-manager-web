import { useState } from "react";
import { useContactStore } from "../../store/contacts";
import ContactCard from "../ContactCard";
import ConfirmModal from "../ConfirmModal";

function CardSection() {
  const { contacts, deleteContact } = useContactStore();
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);

  function handleRemoveContact() {
    if (contactToDelete) {
      deleteContact(contactToDelete);
      setContactToDelete(null);
    }
  }

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
            return (
              <ContactCard
                key={contact.id}
                {...contact}
                onDelete={() => setContactToDelete(contact.id)}
              />
            );
          })
        ) : (
          <div>Sem contatos ainda</div>
        )}
      </div>
      {contactToDelete && (
        <ConfirmModal
          title="Remover contato"
          message="Essa ação não pode ser desfeita."
          type="danger"
          closeButtonLabel="Cencelar"
          confirmButtonLabel="Remover"
          onClose={() => setContactToDelete(null)}
          onConfirm={() => handleRemoveContact()}
        />
      )}
    </section>
  );
}

export default CardSection;
