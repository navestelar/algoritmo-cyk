'use client'

import { PyramidItem } from "./pyramid-item";

interface PyramidProps {
  pyramid: string[][][]
  expression: string
}

export function Pyramid({
  pyramid,
  expression
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
        <div className="flex justify-start gap-2">
          {expression.split('').map((value, index) => (
            <PyramidItem key={index} value={value} />
          ))}
        </div>
      </div>
    </div>
  )
}
