'use client'

import { Input } from "@workspace/ui/components/input"
import { CountrySelect } from "@/components/CountrySelect"

export const PhoneInput = () => {
  return (
    <div>
      <CountrySelect />
      
      <Input type="tel" />
    </div>
  )
}
