import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

interface LockToogleProps {
  className: string;
  isLock: boolean;
  onToggle: () => void;
}

function LockToggle({ isLock, onToggle, className }: LockToogleProps) {
  return (
    <div className={className}>
      {isLock ? (
        <button
          className="rounded-full h-10 px-3 text-accent-brand bg-lime-950"
          onClick={onToggle}
        >
          <LockKeyholeOpen size={18} />
        </button>
      ) : (
        <button
          className="rounded-full h-10 px-3 bg-background-tertiary text-content-primary "
          onClick={onToggle}
        >
          <LockKeyhole size={18} />
        </button>
      )}
    </div>
  );
}

export default LockToggle;
