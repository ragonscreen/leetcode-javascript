# 3513. Number of Unique XOR Triplets I

## Analysis

It is trivial to prove that each number in `nums` itself will be an XOR triplet. Therefore, there will always be at least `n` unique triplets. As such,for `n <= 2`, the result is `n`. More triplets are only possible when XOR constructions are possible for three unique numbers, i.e. `n >= 3`.

For three given numbers strictly less than the next closest power of two `2^k`, every value in the range `[0, 2^k - 1]` can be constructed with different combinations of the numbers. For example, if the largest number is 6, the next closest power of 2 is 8. Thus, every number in the range `[0, 8 - 1] = [0, 7]` can be constructed. This gives us `2^k` total triplets.

To understand why this is the case, think of the binary representation of the number `2^(k - 1)` which exists in the array, which in this case, is 4. The property of the XOR operator allows us to construct any integer of our choice strictly less than `2^k`, which in this case, is 8. Thus all 7 non-zero integers can be constructed. We know `n >= 3`, and thus 1, 2, and 3 exist in our array. `1 XOR 2 XOR 3 = 0`, and therefore 0 can also be constructed.

See <https://leetcode.com/problems/number-of-unique-xor-triplets-i/editorial/> for a proof of this fact.

---
