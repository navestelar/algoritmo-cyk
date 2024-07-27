'use client'
import { GrammarContainer } from "@/components/gramar/GrammarContainer"
import { Header } from "@/components/header"
import { Pyramid } from "@/components/pyramid"
import Image from "next/image"

export default function Home() {
  return (
    <div className="mx-auto h-screen overflow-x-hidden">
      <Header />

      <main className="flex w-full justify-between mx-auto max-w-[1200px] mt-4 max-lg:mx-5">
        <Pyramid />
        <GrammarContainer />
      </main>
    </div>
  )
}
