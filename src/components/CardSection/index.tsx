import { useState } from "react";
import { SearchX } from "lucide-react";
import { useContactStore } from "../../store/contacts";
import ContactCard from "../ContactCard";
import ConfirmModal from "../ConfirmModal";
import ContactForm from "../ContactForm";
import type { Contact } from "../../types/contact";

interface CardSectionProps {
  search: string;
}

function CardSection({ search }: CardSectionProps) {
  const { contacts, deleteContact } = useContactStore();
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  function handleRemoveContact() {
    if (contactToDelete) {
      deleteContact(contactToDelete);
      setContactToDelete(null);
    }
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  const hasContacts = filteredContacts.length > 0;
  return (
    <section className="">
      {filteredContacts.length > 0 && (
        <div className="hidden md:grid md:grid-cols-6 px-3 md:gap-4 text-label-small text-contenct-muted pb-5 font-semibold">
          <span className="col-span-2">Nome</span>
          <span className="col-span-1">Telefone</span>
          <span className="col-span-2">E-mail</span>
          <span className="col-span-1 text-left">Ações</span>
        </div>
      )}
      <div className="flex flex-col gap-5">
        {hasContacts ? (
          filteredContacts.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                {...contact}
                onDelete={() => setContactToDelete(contact.id)}
                onEdit={() => setContactToEdit(contact)}
              />
            );
          })
        ) : (
          <div className="flex flex-col gap-4  pt-20  md:pt-32 items-center justify-center text-center">
            <SearchX className="text-border-primary" width={30} height={30} />
            <div>
              <h4 className="text-content-heading font-semibold text-medium">
                Nenhum contato encontrado
              </h4>
              <span className="text-small text-contenct-muted">
                Tenta buscar por outro nome
              </span>
            </div>
          </div>
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
      {contactToEdit && (
        <ContactForm
          onClose={() => setContactToEdit(null)}
          onSuccess={() => setContactToEdit(null)}
          contact={contactToEdit}
        />
      )}
    </section>
  );
}

export default CardSection;
