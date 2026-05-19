# 1. Two Sum

## Approach 1: Simulation

### Intuition

Notice that if a pair of numbers add up to `target`, then each number of the pair equals its complement subtracted from `target`.

We store each number as we iterate over `nums`. For each number, we check if we have already encountered its complement. If we have, then we have found two numbers that add up to `target`.

### Approach

Use a hash map[^1] to store the index of each number. Iterate over `nums` and in each iteration try to find its complement in the hash map. If the complement exists, return an array containing the current index and the index of its complement. Otherwise, set the current number to its index in the hash map.

Return `[-1, -1]` if we have finished iterating over `nums` and have not returned yet. In this case, no two numbers in `nums` add up to `target`.[^2]

[^1]: A hash map is used for $O(1)$ lookup.

[^2]: According to the given constraints, this will never be the case.

### Complexity

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

`n` = `nums.length`

---

> Author: [ragonscreen](https://github.com/ragonscreen) \
> Last Updated: 2026-05-19 \
> Link: <https://leetcode.com/problems/two-sum/solutions/8278294/simulation-on-by-ragonscreen-yi58/>
