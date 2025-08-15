'use client'

import type { FC } from "react"

import { Input } from "@workspace/ui/components/input"
import { CountrySelect } from "@/components/CountrySelect"
import type { CountrySelectProps } from "@/components/CountrySelect";
import {cn} from "@workspace/ui/lib/utils";

export type PhoneInputProps = CountrySelectProps & {}

export const PhoneInput: FC<PhoneInputProps> = (props) => {
  const { ...restProps } = props

  return (
    <div className={cn('flex')}>
      <CountrySelect {...restProps} />
      
      <Input type="tel" className={cn('rounded-l-none')} />
    </div>
  )
}
