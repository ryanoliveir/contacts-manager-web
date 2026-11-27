export type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  tag?: string;
};

export type Contacts = {
  contacts: Contact[];
};

export type ContactStore = {
  contacts: Contact[];
  isUnlocked: boolean;
  showContactsPassword: string;
  validatedPassword: (input: string) => boolean;
  toggleGlobalUnlock: () => void;
  addContact: (data: Omit<Contact, "id">) => void;
  deleteContact: (id: string) => void;
  updateContact: (id: string, data: Omit<Contact, "id">) => void;
};
