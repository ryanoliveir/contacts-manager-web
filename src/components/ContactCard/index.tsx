import { Phone, Mail, Pencil, Trash } from "lucide-react";
import { getInitials, formatPhone } from "../../utils";
import LockToggle from "../LockToogle";
import { useContactStore } from "../../store/contacts";
import { useState } from "react";

import CopyButton from "../CopyButton";

interface ContacCardProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  tag?: string;
  onDelete: (id: string) => void;
}

function ContactCard({
  id,
  name,
  phone,
  email,
  tag,
  onDelete,
}: ContacCardProps) {
  const [isIndividuallyOpen, setIsIndividuallyOpen] = useState(false);

  const { isUnlocked } = useContactStore();

  const showInfo = isUnlocked || isIndividuallyOpen;

  function handleShowInfo() {
    setIsIndividuallyOpen((prev) => !prev);
  }

  return (
    <div className="bg-background-secondary flex flex-col gap-2  md:gap-4 p-3 rounded-[14px] md:grid md:grid-cols-6 md:items-center">
      <div className="flex gap-3 md:col-span-2">
        <div className=" w-11.5 h-11.5 bg-lime-950 rounded-full items-center flex justify-center text-amber-50 font-semibold text-medium">
          {getInitials(name)}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex  gap-3">
            <p className="text-content-body text-label-medium font-semibold">
              {name}
            </p>
            <CopyButton text={name} />
          </div>
          {tag && (
            <div className="bg-background-tertiary rounded-2xl px-10 text-content-heading text-small w-17 h-4.5 flex justify-center">
              {tag}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 md:gap-2 text-label-medium text-content-body flex-row md:col-span-1 items-center">
        <Phone size={16} className="text-contenct-muted" />
        <span>{showInfo ? formatPhone(phone) : "*".repeat(phone.length)}</span>
        {isUnlocked && <CopyButton text={email} />}
      </div>

      <div className="flex gap-2 md:gap-2 text-label-medium text-content-body flex-row md:col-span-2 items-center">
        <Mail size={16} className="text-contenct-muted " />
        <span className="cursor-pointer">
          {showInfo ? email : "*".repeat(email.length)}
        </span>
        {isUnlocked && <CopyButton text={email} />}
      </div>
      <div className="flex items-center gap-3 justify-end md:justify-start md:col-span-1">
        <button className="flex gap-2 w-19.5 h-8 text-small items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary text-white">
          <Pencil size={18} />
          Editar
        </button>

        <LockToggle
          className="md:block"
          onToggle={handleShowInfo}
          isLock={showInfo}
        />

        <button
          className="rounded-full h-10 px-3 bg-background-tertiary text-white hover:bg-red-950 hover:text-red-400"
          onClick={() => onDelete(id)}
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
