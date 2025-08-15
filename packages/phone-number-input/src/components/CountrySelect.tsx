import type { FC } from "react"
import { Combobox } from "@/components/Combobox"
import type { ComboboxProps } from "@/components/Combobox"

export type CountrySelectProps = ComboboxProps & {}

export const CountrySelect: FC<CountrySelectProps> = (props) => {
  const { ...restProps } = props

  return (
    <div>
      <Combobox {...restProps} />
    </div>
  )
}
