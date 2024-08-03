import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { FormControl } from "./ui/form";

export function Combobox({ field, domains, form, Info, formValue }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? domains.find((domain) => domain.code === field.value)?.name
              : `Select ${Info}`}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Domain..." />
          <CommandEmpty>No Domain found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {domains.map((domain) => (
                <CommandItem
                  value={domain.name}
                  key={domain.code}
                  onSelect={() => {
                    form.setValue(`${formValue}`, domain.code);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      domain.code === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {domain.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
