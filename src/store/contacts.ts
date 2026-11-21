import { create } from "zustand";
import type { ContactStore } from "../types/contact";
import { v4 as uuidv4 } from "uuid";

export const useContactStore = create<ContactStore>((set, get) => ({
  contacts: [
    {
      id: uuidv4() as unknown as string,
      name: "Ana Flávia",
      phone: "12992409703",
      email: "anaflavia@mail.com",
      tag: "Família",
    },
    {
      id: uuidv4() as unknown as string,
      name: "Carlos ",
      phone: "12992403212",
      email: "carlos@mail.com",
    },
    {
      id: uuidv4() as unknown as string,
      name: "Thiago Abrantes de Sousa",
      phone: "12982309711",
      email: "thiago_abrantes@mail.com",
    },
    {
      id: uuidv4() as unknown as string,
      name: "Lucas Andrade",
      phone: "12921439706",
      email: "lucas_andrade@mail.com",
    },
    {
      id: uuidv4() as unknown as string,
      name: "Lucas Andrade",
      phone: "12921439706",
      email: "lucas_andrade@mail.com",
    },
  ],
  isUnlocked: false,
  showContactsPassword: "1234",
  toggleGlobalUnlock: () => set((state) => ({ isUnlocked: !state.isUnlocked })),
  validatedPassword: (input: string) => input === get().showContactsPassword,
}));
