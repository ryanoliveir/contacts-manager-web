import { Plus, User, X } from "lucide-react";
import Label from "../Label";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "../../schemas/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { useEffect } from "react";
import { useContactStore } from "../../store/contacts";

interface ContactFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

function ContactForm({ onClose, onSuccess }: ContactFormProps) {
  const { addContact } = useContactStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(data: ContactFormSchema) {
    addContact(data);
    onSuccess();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="fixed inset-0 z-50  flex items-end md:items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-background-secondary w-full md:w-95 p-5.5 text-content-primary flex flex-col gap-5  rounded-t-2xl md:rounded-2xl"
      >
        <div className="flex justify-between">
          <header className="font-bold text-large">Adicionar contato</header>
          <X
            width={30}
            height={24}
            className="text-content-placeholder"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-18 h-18 bg-background-tertiary rounded-full flex items-center justify-center">
            <User width={32} height={32} />
          </div>
          <button
            className="flex gap-2 text-small w-34 h-8.25 items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary "
            type="button"
          >
            <Plus size={18} />
            Adicionar foto
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Nome</Label>
            <Input
              className="bg-background-primary"
              {...register("name")}
              type="text"
              placeholder="Nome do contato"
            />
            {errors.name && (
              <span className="text-accent-red text-small">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label>Telefone</Label>
            <Input
              className="bg-background-primary"
              {...register("phone")}
              type="text"
              placeholder="Número de telefone"
            />
            {errors.phone && (
              <span className="text-accent-red text-small">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label>E-mail</Label>
            <Input
              className="bg-background-primary"
              {...register("email")}
              type="text"
              placeholder="E-mail do contato"
            />
            {errors.email && (
              <span className="text-accent-red text-small">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-2">
            <button
              className=" gap-2 flex-1 h-11.25 items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary justify-center font-semibold text-sm"
              type="button"
              onClick={onClose}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="flex-1 h-11.25 items-center py-2 p-3 pr-4 rounded-lg bg-accent-brand text-content-inverse justify-center font-semibold text-sm"
            >
              Confirmar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
