'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import { RuleItem } from "./RuleItem"
import { v4 as uuid } from 'uuid'

export function GrammarRules() {
  const [grammar, setGrammar] = useState([
    {
      key: uuid(),
      variable: '',
      value: ''
    }
  ])

  function handleAddRule() {
    setGrammar([
      ...grammar,
      {
        key: uuid(),
        variable: '',
        value: ''
      }
    ])
  }

  function handleDeleteRule(key: string) {
    setGrammar(grammar.filter((rule) => rule.key!== key))
  }

  function handleChangeRule(key: string, name: string, value: string) {
    setGrammar(grammar.map((rule) => rule.key === key ? {...rule, [name]: value } : rule))
  }

  console.log(grammar)

  return (
    <>
    <h2 className="text-xl">Regras da gramática</h2>
      <div className="flex flex-col gap-1">
        {grammar.map((rule) => {
          return (
            <RuleItem
              key={rule.key}
              value={rule.value}
              variable={rule.variable}
              onChange={(name, value) => handleChangeRule(rule.key, name, value)}
              onDelete={() => handleDeleteRule(rule.key)}
            />
          )
        })}
      </div>
      <Button className="mr-7" onClick={handleAddRule}>Adicionar regra</Button>
    </>
  )
}