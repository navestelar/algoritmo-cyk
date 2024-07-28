import { cykAlgorithm, Rule } from './cyk';

test('CYK Algorithm should recognize the language generated by the given grammar', () => {
  const grammar: Rule[] = [
    ['S', ['AB', 'BC']],
    ['A', ['BA', 'a']],
    ['B', ['CC', 'b']],
    ['C', ['AB', 'a']],
  ];
  const expression = 'baaba';
  
  const { table, result } = cykAlgorithm(grammar, expression);

  console.log('Table:', table);
  expect(result).toBe(true);
});

test('CYK Algorithm should reject an expression not generated by the grammar', () => {
  const grammar: Rule[] = [
    ['S', ['AB', 'BC']],
    ['A', ['BA', 'a']],
    ['B', ['CC', 'b']],
    ['C', ['AB', 'a']],
  ];
  const expression = 'bbabb';
  
  const { table, result } = cykAlgorithm(grammar, expression);

  console.log('Table:', table);
  expect(result).toBe(false);
});
