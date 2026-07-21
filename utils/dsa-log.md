## Problem 1 — Two Sum

**Pattern:** Hash Map
**Recognition Clue:** "find two numbers that add up to target" → store complement
**Time Complexity:** O(n) — one pass, O(1) lookup per element
**Space Complexity:** O(n) — storing up to n elements in hashmap
**Brute Force:** O(n²) — nested loops
**Mistake to Avoid:** Storing index→value instead of value→index