"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { useLanguage } from "@/src/contexts/LanguageContext";

const languages = [
  {
    value: "ts",
    label: "TypeScript",
    icon: "/ts-icon.ico",
    description: "Langage TypeScript standard",
  },
  {
    value: "sourcelang",
    label: "SourceLang",
    icon: "/sourcelang-icon.ico",
    description: "Mon langage de programmation custom",
  },
] as const;

export function LanguageSwitcher() {
  const [open, setOpen] = React.useState(false);
  const { mode, setMode, isSourceLang } = useLanguage();

  const currentLanguage = languages.find((lang) => 
    lang.value === (isSourceLang ? "sourcelang" : "ts")
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between bg-transparent border-[#3c3c3c] hover:bg-[#2a2d2e] text-[#007acc] text-xs h-6 px-2"
        >
          <div className="flex items-center gap-2">
            <img 
              src={currentLanguage?.icon} 
              alt={currentLanguage?.label}
              className="w-3 h-3"
            />
            <span>{currentLanguage?.label}</span>
          </div>
          <ChevronsUpDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0 bg-[#252526] border-[#3c3c3c]">
        <Command className="bg-transparent">
          <CommandInput 
            placeholder="Rechercher langage..." 
            className="text-xs text-[#d4d4d4] placeholder:text-[#9d9d9d]"
          />
          <CommandList>
            <CommandEmpty className="text-xs text-[#9d9d9d] p-2">
              Aucun langage trouvé.
            </CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setMode(currentValue as "ts" | "sourcelang");
                    setOpen(false);
                  }}
                  className="flex items-center justify-between cursor-pointer hover:bg-[#2a2d2e]"
                >
                  <div className="flex items-center gap-2">
                    <img 
                      src={language.icon} 
                      alt={language.label}
                      className="w-3 h-3"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs text-[#d4d4d4]">
                        {language.label}
                      </span>
                      <span className="text-[10px] text-[#9d9d9d]">
                        {language.description}
                      </span>
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "h-3 w-3",
                      mode === language.value ? "opacity-100 text-[#007acc]" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}