"use client";

import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const ComboboxDemo: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="w-full max-w-[300px]">
        <Combobox value={value} onValueChange={(v) => setValue(v ?? "")}>
          <ComboboxInput placeholder="Search framework..." showTrigger />
          <ComboboxContent>
            <ComboboxList>
              {frameworks.map((framework) => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
              <ComboboxEmpty>No framework found.</ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <p className="text-sm text-[var(--sb-text-muted)]">
        Selected:{" "}
        <span className="font-bold text-white">{value || "None"}</span>
      </p>
    </div>
  );
};

export default ComboboxDemo;
