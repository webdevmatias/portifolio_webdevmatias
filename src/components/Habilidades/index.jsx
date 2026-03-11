"use client";
import { useState } from "react";
import { CATEGORIES } from "../../data/habilidades";
import TechChip from "./TechChip";

export default function Habilidades() {
  const [active, setActive] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggle = (key) => setActive(active === key ? null : key);
  const toggleCategory = (label) =>
    setActiveCategory(activeCategory === label ? null : label);

  const visibleCategories = activeCategory
    ? CATEGORIES.filter((c) => c.label === activeCategory)
    : CATEGORIES;

  return (
    <section className="flex min-h-screen flex-col items-center gap-8 justify-center py-16 bg-[#080808] px-4">
      {/* Header */}
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-2xl text-white uppercase font-light">
          Habilidades :{" "}
        </h2>
        <p className="text-gray-500 text-sm">
          Clique para filtrar, ou ver descrição.
        </p>
      </div>

      {/* Filtro por categoria */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map(({ label, color }) => (
          <button
            key={label}
            onClick={() => toggleCategory(label)}
            className={`text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border transition-all duration-200
              ${
                activeCategory === label
                  ? "text-black border-transparent"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            style={
              activeCategory === label
                ? { background: color, borderColor: color }
                : {}
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Categorias */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {visibleCategories.map(({ label, color, techs }) => (
          <div
            key={label}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: color }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color }}
              >
                {label}
              </span>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-xs text-gray-600">{techs.length}</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {techs.map(({ Icon, label: name, note }) => {
                const key = `${label}-${name}`;
                return (
                  <TechChip
                    key={key}
                    Icon={Icon}
                    label={name}
                    note={note}
                    isActive={active === key}
                    onClick={() => toggle(key)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
