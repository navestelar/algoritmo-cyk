'use client'
import { GrammarForm, grammarProps } from "@/components/GrammarForm"
import { Header } from "@/components/header"
import { Pyramid } from "@/components/pyramid"
import { cykAlgorithm, Grammar } from "@/utils/cyk"
import { generatePyramid } from "@/utils/generatePyramid"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

export default function Home() {
  const [pyramid, setPyramid] = useState<string[][][]>(generatePyramid(5))

  function handleSubmit(data: grammarProps) {
    const processedData: Grammar = data.rules.map(([valor, valores]) => [
      valor,
      valores.split('|').map(s => s.trim())
    ]);

    const {result, table} = cykAlgorithm(processedData, data.expression)

    if (result) {
      setPyramid(table)
      toast.success(`A cadeia ${data.expression} pode ser gerada pela gramática apresentada`)
    } else {
      toast.error(`A cadeia ${data.expression} não pode ser gerada pela gramática apresentada`)
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <div className="mx-auto h-screen overflow-x-hidden">
        <Header />

        <main className="flex w-full justify-between mx-auto max-w-[1200px] mt-14 max-lg:mx-5">
          <Pyramid pyramid={pyramid} />
          <GrammarForm onSubmit={handleSubmit} />
        </main>
      </div>
    </QueryClientProvider>
  )
}
