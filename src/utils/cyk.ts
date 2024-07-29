export type Rule = [string, string[]];
export type Grammar = Rule[];

export function cykAlgorithm(grammar: Grammar, expression: string): { table: string[][][], result: boolean } {
  const n = expression.length;
  const r = grammar.length;

  // Inicializar a tabela CYK com Sets para evitar duplicações
  const table: Set<string>[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Set<string>())
  );

  // Preencher a tabela para substrings de comprimento 1
  for (let s = 1; s <= n; s++) {
    for (let rule of grammar) {
      const [lhs, rhs] = rule;
      for (let production of rhs) {
        if (production.length === 1 && production[0] === expression[s - 1]) {
          table[s - 1][0].add(lhs);
        }
      }
    }
  }

  // Preencher a tabela para substrings de comprimento maior que 1
  for (let l = 2; l <= n; l++) {
    for (let s = 1; s <= n - l + 1; s++) {
      for (let p = 1; p <= l - 1; p++) {
        for (let rule of grammar) {
          const [lhs, rhs] = rule;
          for (let production of rhs) {
            if (production.length === 2) {
              if (
                table[s - 1][p - 1].has(production[0]) &&
                table[s + p - 1][l - p - 1].has(production[1])
              ) {
                table[s - 1][l - 1].add(lhs);
              }
            }
          }
        }
      }
    }
  }

  const result = table[0][n - 1].has(grammar[0][0]);
  

  const arrangedTable: string[][][] = Array.from({ length: n }, (_, i) =>
    table.slice(0, i + 1).map(row => Array.from(row[n - i - 1]))
  );

  return { table: arrangedTable, result };
}