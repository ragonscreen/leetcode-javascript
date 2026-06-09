# 3689. Maximum Total Subarray Value I

## Key Ideas

1. Since each subarray can be chosen more than once, we simply choose the "best" subarray `k` number of times.
2. A subarray is "better" than another, if it has a larger max element and/or a smaller min element.
3. We are more likely to find a larger max element if we consider more elements. Therefore, we simply consider every element in the array for the best possible chance of finding the largest element we can. This is the same idea we use to find the min element.

---

> Author: [ragonscreen](https://github.com/ragonscreen) \
> Last Updated: 2026-06-09 \
> Link: <https://leetcode.com/problems/maximum-total-subarray-value-i/>
