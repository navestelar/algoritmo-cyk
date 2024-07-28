export type Rule = [string, string[]];
type Grammar = Rule[];

export function cykAlgorithm(grammar: Grammar, expression: string): { table: string[][][], result: boolean } {
  const n = expression.length;
  const r = grammar.length;

  const table: string[][][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => [])
  );

  for (let s = 1; s <= n; s++) {
    for (let rule of grammar) {
      const [lhs, rhs] = rule;
      for (let production of rhs) {
        if (production.length === 1 && production[0] === expression[s - 1]) {
          table[s - 1][0].push(lhs);
        }
      }
    }
  }

  for (let l = 2; l <= n; l++) {
    for (let s = 1; s <= n - l + 1; s++) {
      for (let p = 1; p <= l - 1; p++) {
        for (let rule of grammar) {
          const [lhs, rhs] = rule;
          for (let production of rhs) {
            if (production.length === 2) {
              const [B, C] = production;
              if (
                table[s - 1][p - 1].includes(B) &&
                table[s + p - 1][l - p - 1].includes(C)
              ) {
                table[s - 1][l - 1].push(lhs);
              }
            }
          }
        }
      }
    }
  }

  const result = table[0][n - 1].includes(grammar[0][0]);
  return { table, result };
}
