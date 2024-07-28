'use client'

import { PyramidItem } from "./pyramid-item";

export function Pyramid() {
  const pyramid = generatePyramid(5); 

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Pirâmide</h2>
      <div className="flex flex-col gap-2">
        {pyramid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-start gap-2">
            {row.map((value, itemIndex) => (
              <PyramidItem key={itemIndex} value='' />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function generatePyramid(lines) {
  const pyramid = [];
  for (let i = 0; i < lines; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push(`Item ${i}-${j}`);
    }
    pyramid.push(row);
  }
  return pyramid;
}