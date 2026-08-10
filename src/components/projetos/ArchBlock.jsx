import { HiCpuChip, HiCheckCircle } from "react-icons/hi2";

const ArchBlock = ({ arch, archDetails }) => {
  if (!arch && (!archDetails || archDetails.length === 0)) return null;

  return (
    <div className="rounded-xl border border-[#FB8500]/20 bg-[#FB8500]/[0.04] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#FB8500]/15 bg-[#FB8500]/[0.04]">
        <HiCpuChip size={14} className="text-[#FB8500] shrink-0" />
        <span className="text-[10px] uppercase tracking-widest text-[#FB8500]/70 ibm-plex-mono-regular font-semibold">
          Decisões Arquiteturais
        </span>
      </div>

      {/* Arch pattern */}
      <div className="px-5 pt-4 pb-2">
        <p className="ibm-plex-mono-regular text-sm text-white/90 font-medium">
          {arch}
        </p>
      </div>

      {/* Details list */}
      {archDetails && archDetails.length > 0 && (
        <ul className="px-5 pb-5 flex flex-col gap-2.5 mt-1">
          {archDetails.map((detail, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <HiCheckCircle
                size={13}
                className="text-[#FB8500]/50 shrink-0 mt-0.5"
              />
              <span className="text-xs text-gray-400 leading-relaxed">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArchBlock;
