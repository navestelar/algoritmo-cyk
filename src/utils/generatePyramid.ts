export function generatePyramid(lines: number = 5): string[][][] {
  const pyramid = [];
  for (let i = 0; i < lines; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push(['']);
    }
    pyramid.push(row);
  }
  return pyramid;
}
