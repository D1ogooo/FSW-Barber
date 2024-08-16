"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigator.clipboard.writeText(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
