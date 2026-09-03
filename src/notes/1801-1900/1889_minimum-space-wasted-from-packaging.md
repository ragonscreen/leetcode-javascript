# 1889. Minimum Space Wasted From Packaging

## Thoughts

The Prefix Sum approach was not too difficult to come up with. I did not come up with the Binary
Search approach myself.

## Analysis

Any package of size `K` can fit in a box of size `>= K`. However, it cannot fit in a box of size
`< K`. We count the number of packages at each size.

A prefix sum array is useful here because at every size `S` it tells us how many packages of size
`<= S` have been encountered.

1. For each supplier, we sort their boxes by size non-decreasing order. This is because we want to
   minimize wastage; we want the smallest possible box to collect the largest number of packages.
2. If a supplier's largest box is not big enough to collect the largest package, then that supplier
   is invalid, and we move on to the next supplier. If all suppliers are invalid, then the packages
   cannot be packed. `-1` is returned.
3. We count the number of packages each box size can collect.
4. At each step, the size used is `cntBox * szBox`.
5. Once a box has collected `P` packages, the total remaining packages in `N - P`.
6. The total capacity used per supplier is `sum(cntBox * szBox)`. We track the minimum such capacity
   used.
7. The result is `min(total capacity used) - sum of sizes of all packages`.

---
