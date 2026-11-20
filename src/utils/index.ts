export function getInitials(name: string) {
  const nameParts = name.split(" ");

  if (!nameParts[0] || !nameParts[1]) {
    return "N/A";
  }

  const firstNameInitial = nameParts[0][0];
  const lasttNameInitial = nameParts[nameParts.length - 1][0];

  return `${firstNameInitial}${lasttNameInitial}`;
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  return value; // se não bater, mostra como veio
}
