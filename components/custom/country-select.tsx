"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronsUpDown, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CountrySelectProps {
  value: string | null;
  onChange: (value: string) => void;
  countries: string[];
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  countries,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full h-[46px] justify-between",
            !value && "text-muted-foreground"
          )}
        >
          {value ? value : "Select Country"}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[400px]" align="start">
        <Command>
          <CommandInput placeholder="Search Country..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country, index) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={() => onChange(country)}
                  className="cursor-pointer"
                >
                  {country}
                  <Check
                    className={cn(
                      "ml-auto",
                      country === value ? "opacity-100" : "opacity-0"
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
};

export default CountrySelect;
