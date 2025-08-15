"use client"

import { useState } from "react"
import type { FC } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export type ComboboxProps = {
  /* options list */
  commands?: Array<{ label: string; value: string }>
  /* default label when no value is selected */
  defaultLabel?: string
  /* placeholder text for the input */
  placeholder?: string
  /* text to show when no options are available */
  emptyText?: string
  /* whether the combobox is searchable */
  isSearchable?: boolean
}

export const Combobox: FC<ComboboxProps> = (props) => {
  const { commands = [], defaultLabel = '', placeholder = '', emptyText = '', isSearchable = false } = props

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between rounded-r-none")}
        >
          {value
            ? commands.find((command) => command.value === value)?.label
            : defaultLabel}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0")}>
        <Command>
          {isSearchable && (<CommandInput placeholder={placeholder} className="h-9" />)}
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {commands.map((command) => (
                <CommandItem
                  key={command.value}
                  value={command.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {command.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === command.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
