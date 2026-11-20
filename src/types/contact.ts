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
};
