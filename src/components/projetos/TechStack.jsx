import { useState } from "react";
import TechChip from "../Habilidades/TechChip";

const LAYER_CONFIG = {
  front: { label: "Front-end", color: "#61DAFB" },
  back: { label: "Back-end", color: "#68D391" },
  db: { label: "Banco de Dados", color: "#F6AD55" },
  devops: { label: "DevOps", color: "#76E4F7" },
};

const LAYER_ORDER = ["front", "back", "db", "devops"];

const TechStack = ({ tecnologias }) => {
  const [active, setActive] = useState(null);

  if (!tecnologias || tecnologias.length === 0) return null;

  // Group by layer; fallback to "back" if no layer defined
  const byLayer = {};
  for (const tech of tecnologias) {
    const layer = tech.layer || "back";
    if (!byLayer[layer]) byLayer[layer] = [];
    byLayer[layer].push(tech);
  }

  const activeLayers = LAYER_ORDER.filter((l) => byLayer[l]?.length > 0);

  const toggle = (key) => setActive(active === key ? null : key);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-widest text-gray-600 ibm-plex-mono-regular">
        Stack de Tecnologias
      </p>

      {activeLayers.map((layer) => {
        const cfg = LAYER_CONFIG[layer];
        const techs = byLayer[layer];

        return (
          <div
            key={layer}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 transition-all duration-300"
          >
            {/* Category header — idêntico ao Habilidades */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: cfg.color }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: cfg.color }}
              >
                {cfg.label}
              </span>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-xs text-gray-600">{techs.length}</span>
            </div>

            {/* Chips — reutiliza TechChip exatamente como Habilidades */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {techs.map(({ Icon, label: name }) => {
                const key = `${layer}-${name}`;
                return (
                  <TechChip
                    key={key}
                    Icon={Icon}
                    label={name}
                    note={null}
                    isActive={active === key}
                    onClick={() => toggle(key)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
