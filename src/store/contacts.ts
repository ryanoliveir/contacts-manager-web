import { create } from "zustand";
import type { Contact, ContactStore } from "../types/contact";
import { uuidv4 as uuid } from "zod";

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [
    {
      id: uuid() as unknown as string,
      name: "Ana Flávia",
      phone: "12992409703",
      email: "anaflavia@mail.com",
      tag: "Família",
    },
    {
      id: uuid() as unknown as string,
      name: "Carlos ",
      phone: "12992403212",
      email: "carlos@mail.com",
    },
    {
      id: uuid() as unknown as string,
      name: "Thiago Abrantes de Sousa",
      phone: "12982309711",
      email: "thiago_abrantes@mail.com",
    },
    {
      id: uuid() as unknown as string,
      name: "Lucas Andrade",
      phone: "12921439706",
      email: "lucas_andrade@mail.com",
    },
    {
      id: uuid() as unknown as string,
      name: "Lucas Andrade",
      phone: "12921439706",
      email: "lucas_andrade@mail.com",
    },
  ],
}));
