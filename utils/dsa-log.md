## Problem 1 — Two Sum

**Pattern:** Hash Map
**Recognition Clue:** "find two numbers that add up to target" → store complement
**Time Complexity:** O(n) — one pass, O(1) lookup per element
**Space Complexity:** O(n) — storing up to n elements in hashmap
**Brute Force:** O(n²) — nested loops
**Mistake to Avoid:** Storing index→value instead of value→index

## Problem 2 — Minimum Size Subarray Sum (LC 209)

**Pattern:** Sliding Window (Variable)
**Recognition Clue:** "minimum length subarray with sum >= target" → expand right, shrink left
**Time Complexity:** O(n) — each element added and removed at most once
**Space Complexity:** O(1) — no extra space
**Brute Force:** O(n²) — check every subarray
**Mistake to Avoid:** Using value instead of index in for loop

## Problem 3 — Longest Substring Without Repeating Characters (LC 3)

**Pattern:** Sliding Window (Variable) + Set
**Recognition Clue:** "longest substring without duplicates" → set tracks window, shrink on duplicate
**Time Complexity:** O(n) — each character added and removed at most once
**Space Complexity:** O(n) — set stores window characters
**Brute Force:** O(n²) — check every substring
**Mistake to Avoid:** Resetting window to 0 instead of shrinking from left