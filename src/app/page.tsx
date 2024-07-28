'use client'
import { GrammarForm } from "@/components/GrammarForm"
import { Header } from "@/components/header"
import { Pyramid } from "@/components/pyramid"

export default function Home() {
  return (
    <div className="mx-auto h-screen overflow-x-hidden">
      <Header />

      <main className="flex w-full justify-between mx-auto max-w-[1200px] mt-14 max-lg:mx-5">
        <Pyramid />
        <GrammarForm />
      </main>
    </div>
  )
}
