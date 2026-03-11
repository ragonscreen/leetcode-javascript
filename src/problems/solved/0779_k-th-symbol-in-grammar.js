/**
 * 0779. K-th Symbol in Grammar
 * Link: https://leetcode.com/problems/k-th-symbol-in-grammar/
 * Difficulty: Medium
 * Date: 2026-03-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Math
 * Time Complexity: O(log k)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthGrammar = (n, k) => {
        let count = 0;
        let idx = k;

        while (idx !== 1) {
                const pow = Math.floor(Math.log2(idx));
                const val = 2 ** pow;

                if (idx === val) {
                        count += pow;
                        break;
                }

                idx -= val;
                count++;
        }

        return count % 2;
};

export { kthGrammar };
