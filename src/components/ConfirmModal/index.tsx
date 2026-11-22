interface ConfirmModalProps {
  title: string;
  message: string;
  type: "danger" | "warning" | "success";
  confirmButtonLabel: string;
  closeButtonLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}

import { cn } from "../../libs/cn";

function ConfirmModal({
  title,
  message,
  type,
  confirmButtonLabel,
  closeButtonLabel,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  function setModelType() {
    if (type == "danger") {
      return "bg-accent-red text-content-primary";
    }

    if (type == "warning") {
      return "bg-amber-400 text-content-inverse";
    }

    if (type == "success") {
      return "bg-accent-brand text-content-inverse";
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex flex-col bg-background-secondary w-85 p-5 rounded-2xl text-content-primary gap-4">
        <header className="font-bold text-large">{title}</header>
        <span className="text-medium text-content-heading">{message}</span>
        <div className="flex justify-between gap-2">
          <button
            className="flex-1 flex items-center justify-center h-10 rounded-lg bg-background-tertiary font-semibold text-sm"
            onClick={onClose}
          >
            {closeButtonLabel}
          </button>
          <button
            className={cn(
              "flex-1 flex items-center justify-center h-10 rounded-lg font-semibold text-sm",
              setModelType(),
            )}
            onClick={onConfirm}
          >
            {confirmButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;
