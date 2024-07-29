'use client'

import { PyramidItem } from "./pyramid-item";

interface PyramidProps {
  pyramid: string[][][]
}

export function Pyramid({
  pyramid
}: PyramidProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Pirâmide</h2>
      <div className="flex flex-col gap-2">
        {pyramid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-start gap-2">
            {row.map((value, itemIndex) => {
              if (rowIndex >= itemIndex) {
                return (
                  <PyramidItem key={itemIndex} value={value.join(', ')} />
                )
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
