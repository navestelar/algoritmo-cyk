package app;

import java.util.*;

class CYKAlgorithm {

    // Non-terminals symbols
    static List<String> terminals = new ArrayList<>();
    static List<String> non_terminals = new ArrayList<>();

    // Rules of the grammar
    static Map<String, List<List<String>>> R = new HashMap<>();

    // Function to perform the CYK Algorithm
    static void cykParse(List<String> w) {
        int n = w.size();

        // Initialize the table
        Map<Integer, Map<Integer, Set<String>>> T = new HashMap<>();

        // Filling in the table
        for (int j = 0; j < n; j++) {
            for (Map.Entry<String, List<List<String>>> entry : R.entrySet()) {
                String lhs = entry.getKey();
                List<List<String>> rules = entry.getValue();

                for (List<String> rhs : rules) {
                    if (rhs.size() == 1 && rhs.get(0).equals(w.get(j))) {
                        T.computeIfAbsent(j, k -> new HashMap<>())
                            .computeIfAbsent(j, k -> new HashSet<>())
                            .add(lhs);
                    }
                }
            }
        }

        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                for (int k = i; k < j; k++) {
                    for (Map.Entry<String, List<List<String>>> entry : R.entrySet()) {
                        String lhs = entry.getKey();
                        List<List<String>> rules = entry.getValue();

                        for (List<String> rhs : rules) {
                            if (rhs.size() == 2 &&
                                T.getOrDefault(i, Collections.emptyMap())
                                    .getOrDefault(k, Collections.emptySet())
                                    .contains(rhs.get(0)) &&
                                T.getOrDefault(k + 1, Collections.emptyMap())
                                    .getOrDefault(j, Collections.emptySet())
                                    .contains(rhs.get(1))) {
                                T.computeIfAbsent(i, k1 -> new HashMap<>())
                                    .computeIfAbsent(j, k1 -> new HashSet<>())
                                    .add(lhs);
                            }
                        }
                    }
                }
            }
        }

        // If word can be formed by rules of given grammar
        if (T.getOrDefault(0, Collections.emptyMap()).getOrDefault(n - 1, Collections.emptySet()).contains("S")) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }

        // Print the parsing table with base at the bottom
        List<List<String>> table = new ArrayList<>();
        for (int length = 1; length <= n; length++) {
            List<String> row = new ArrayList<>();
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                Set<String> cell = T.getOrDefault(i, Collections.emptyMap()).getOrDefault(j, Collections.emptySet());
                row.add(cell.toString());
            }
            table.add(row);
        }

        // Print the table from bottom to top
        for (int i = table.size() - 1; i >= 0; i--) {
            List<String> row = table.get(i);
            for (String cell : row) {
                System.out.print(cell + " ");
            }
            System.out.println();
        }
    }

    // Driver Code
    public static void main(String[] args) {
        // Terminal symbols
        terminals = Arrays.asList("a", "b");

        // Non terminal symbols
        non_terminals = Arrays.asList("S", "A");

        // Rules
        R.put("S", Arrays.asList(Arrays.asList("A", "A"), Arrays.asList("A", "S"), Arrays.asList("b")));
        R.put("A", Arrays.asList(Arrays.asList("S", "A"), Arrays.asList("A", "S"), Arrays.asList("a")));

        // Given String
        List<String> w = Arrays.asList("a", "b", "a", "a", "b");

        // Function Call
        cykParse(w);
    }
}
