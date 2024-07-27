'use client'

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function RegularExpression() {
  return (
    <>
      <div>
        <h2 className="text-xl">Expressão</h2>
        <p className="text-xs">Verifique se a expressão pertence à gramática</p>
      </div>
      <div className="flex items-center gap-2">
        <Input />
        <Button>Verificar</Button>
      </div>
    </>
  )
}