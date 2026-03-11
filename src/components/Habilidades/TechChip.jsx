const TechChip = ({ Icon, label, note, isActive, onClick }) => (
  <div className="flex flex-col items-center md:items-start">
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "bg-[#FB8500]/15 border-[#FB8500]/60 text-[#FB8500]"
            : "bg-[#1a1a1a] border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200"
        }`}
    >
      <Icon size={16} />
      <span>{label}</span>

      {/* note inline — só no desktop */}
      {isActive && (
        <span className="hidden md:inline ml-1 text-xs text-gray-400 font-normal border-l border-white/10 pl-2">
          {note}
        </span>
      )}
    </button>

    {/* note abaixo — só no mobile */}
    {isActive && (
      <span className="md:hidden mt-1 text-xs text-gray-400 text-center">
        {note}
      </span>
    )}
  </div>
);

export default TechChip;
