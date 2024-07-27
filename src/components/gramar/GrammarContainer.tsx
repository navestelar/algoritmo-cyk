'use client'

import { GrammarRules } from "./GrammarRules"
import { RegularExpression } from "./RegularExpression"

export function GrammarContainer() {
  

  return (
    <div className="flex flex-col gap-3 w-[300px]">
      <RegularExpression />
      <GrammarRules />
    </div>
  )
}