import { useEffect, useRef } from "react";

const TechChip = ({ Icon, label, note, isActive, onClick }) => {
  const ref = useRef(null);

  // Fecha ao tocar fora no mobile
  useEffect(() => {
    if (!isActive) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClick();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [isActive, onClick]);

  const handlePointer = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <div ref={ref} className="relative">
      <button
        onPointerDown={handlePointer}
        onClick={(e) => e.preventDefault()}
        className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 select-none touch-manipulation cursor-pointer ${
          isActive
            ? "bg-[#FB8500]/15 border-[#FB8500]/60 text-[#FB8500] shadow-[0_0_12px_rgba(251,133,0,0.15)]"
            : "bg-[#141414] border-white/5 text-gray-300 hover:border-[#FB8500]/40 hover:text-white hover:bg-white/[0.04]"
        }`}
      >
        <Icon size={16} className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-[#FB8500]" : "text-[#FB8500]/80"}`} />
        <span className="tracking-wide ibm-plex-mono-regular">{label}</span>

        {/* Note inline — exibido quando ativo */}
        {isActive && note && (
          <span className="hidden md:inline ml-1 text-[11px] text-gray-400 font-normal border-l border-white/15 pl-2 truncate max-w-[200px]">
            {note}
          </span>
        )}
      </button>

      {/* Tooltip flutuante — mobile */}
      {isActive && note && (
        <div className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none">
          <div className="bg-[#FB8500] text-black font-semibold text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap shadow-lg">
            {note}
          </div>
          <div className="flex justify-center -mt-[4px]">
            <div
              className="w-2 h-2 rotate-45"
              style={{ background: "#FB8500" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechChip;
