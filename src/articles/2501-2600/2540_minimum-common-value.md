# 2540. Minimum Common Value

## Approach 1: Two Pointers

### Intuition

We can run a regular two pointer algorithm over the arrays as they are sorted in non-decreasing[^1] order.

### Approach

We start off two pointers `p` and `q` at the start of `nums1` and `nums2` respectively, and the search runs while neither pointer has reached the end of its respective array.

We increment the pointer pointing at the smaller value at each turn. This ensures neither pointer runs ahead of the other. If we incremented the pointer pointing at the larger value, then this pointer would continue to run ahead of the other. This is because each next value is always greater than or equal to the current value, due to the non-decreasing nature of the arrays.

If the numbers at both pointers are equal, then we have found the minimum common value, and this value is returned. However, if either pointer reaches the end of its respective array and a common value has not been found, then there is no common value in the arrays, and we return `-1`.

[^1]: Non-decreasing order is another way of saying increasing order with possible duplicates.

### Complexity

- Time Complexity: $O(n + m)$
- Space Complexity: $O(1)$

`n` = `nums1.length`, `m` = `nums2.length`

---

> Author: [ragonscreen](https://github.com/ragonscreen) \
> Last Updated: 2026-05-19 \
> Link: <https://leetcode.com/problems/minimum-common-value/solutions/8278491/two-pointers-on-m-by-ragonscreen-13j4/>
