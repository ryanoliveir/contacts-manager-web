import { Phone, Mail, Pencil, LockKeyholeOpen, Trash } from "lucide-react";
import { getInitials, formatPhone } from "../../utils";

interface ContacCardtProps {
  id?: string;
  name: string;
  phone: string;
  email: string;
  tag?: string;
}

function ContactCard({ id, name, phone, email, tag }: ContacCardtProps) {
  return (
    <div className="bg-background-secondary flex flex-col gap-2  md:gap-4 p-3 rounded-[14px] md:grid md:grid-cols-6 md:items-center">
      <div className="flex gap-3 md:col-span-2">
        <div className=" w-11.5 h-11.5 bg-lime-950 rounded-full items-center flex justify-center text-amber-50 font-semibold text-medium">
          {getInitials(name)}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-content-body text-label-medium font-semibold">
            {name}
          </p>
          {tag && (
            <div className="bg-background-tertiary rounded-2xl px-10 text-content-heading text-small w-17 h-4.5 flex justify-center">
              {tag}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 md:gap-2 text-label-medium text-content-body flex-row md:col-span-1 items-center">
        <Phone size={16} className="text-contenct-muted" />
        <span>{formatPhone(phone)}</span>
      </div>

      <div className="flex gap-2 md:gap-2 text-label-medium text-content-body flex-row md:col-span-2 items-center">
        <Mail size={16} className="text-contenct-muted " />
        <span>{email}</span>
      </div>
      <div className="flex items-center gap-3 justify-end md:justify-start md:col-span-1">
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
  );
}

export default ContactCard;
