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
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200 select-none touch-manipulation
          ${
            isActive
              ? "bg-[#FB8500]/15 border-[#FB8500]/60 text-[#FB8500]"
              : "bg-[#1a1a1a] border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200"
          }`}
      >
        <Icon size={16} />
        <span>{label}</span>

        {/* note inline — só no desktop */}
        {isActive && note && (
          <span className="hidden md:inline ml-1 text-xs text-gray-400 font-normal border-l border-white/10 pl-2">
            {note}
          </span>
        )}
      </button>

      {/* Tooltip flutuante — só no mobile */}
      {isActive && note && (
        <div className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 pointer-events-none">
          <div className="bg-[#FB8500] border border-[#FB8500]/25 text-gray-900 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg shadow-black/50">
            {note}
          </div>
          {/* Seta */}
          <div className="flex justify-center -mt-[5px]">
            <div
              className="w-2.5 h-2.5 rotate-45 border-b border-r border-[#FB8500]/25"
              style={{ background: "#FB8500" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechChip;
