import { X } from "lucide-react";
import Label from "../Label";
import PasswordInput from "../PasswordInput";
import { useContactStore } from "../../store/contacts";
import { useState } from "react";

interface UnlockModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

function UnlockModal({ onClose, onSuccess }: UnlockModalProps) {
  const { validatedPassword } = useContactStore();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleConfirm() {
    if (validatedPassword(password)) {
      setError("");
      onSuccess();
      return;
    }

    setError("Senha Incorreta");
    return;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex flex-col gap-4 bg-background-secondary w-80 p-5 rounded-2xl text-content-primary">
        <div className="flex justify-between">
          <header className="font-bold text-large">
            Visualizar informações
          </header>
          <X
            width={30}
            height={24}
            className="text-content-placeholder"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label>Senha</Label>
          <PasswordInput
            placeholder="Digite sua senha"
            type="password"
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className="text-accent-red text-small">{error}</span>}
        </div>
        <div className="flex justify-between">
          <button
            className=" gap-2 w-33.25 items-center py-2 p-3 pr-4 rounded-lg bg-background-tertiary justify-center font-semibold text-sm"
            onClick={onClose}
          >
            Voltar
          </button>
          <button
            className=" w-33.25  items-center py-2 p-3 pr-4 rounded-lg bg-accent-brand text-content-inverse justify-center font-semibold text-sm"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnlockModal;
