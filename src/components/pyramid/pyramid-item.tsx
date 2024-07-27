'use client'

interface PyramidItemProps {
  value?: string
}

export function PyramidItem({
  value = ''
}: PyramidItemProps) {
  return (
    <div className="size-16 border rounded-lg items-center justify-center text-center border-slate-400">
      {value}
    </div>
  )
}