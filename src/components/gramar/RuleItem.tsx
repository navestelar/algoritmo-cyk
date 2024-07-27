'use client'

import { ArrowRight, XCircle } from "@phosphor-icons/react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface RuleItemProps {
  variable: string
  value: string
  onDelete: () => void
  onChange: (name: string, value: string) => void
}

export function RuleItem({
  value,
  variable,
  onDelete,
  onChange
}: RuleItemProps) {
  return (
      <div className="flex gap-1 items-center">
        <Input
          maxLength={1}
          className="w-[40px]"
          value={variable}
          onChange={(e) => onChange('variable', e.target.value)}
        />
        <ArrowRight size={32} className="block" />
        <Input 
          value={value} 
          onChange={(e) => onChange('value', e.target.value)}  
        />

        <Button onClick={onDelete} variant='ghost' size='icon'>
          <XCircle size={16} className="text-red-700" />
        </Button>
      </div>
  )
}