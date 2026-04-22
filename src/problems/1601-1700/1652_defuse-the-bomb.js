/**
 * 1652. Defuse the Bomb
 *
 * Link: https://leetcode.com/problems/defuse-the-bomb/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 223,412
 * - Total Submissions: 281,730
 * - Acceptance Rate: 79.3%
 *
 * Similar Problems:
 * - circular-sentence (Easy)
 * - shortest-distance-to-target-string-in-a-circular-array (Easy)
 * - take-k-of-each-character-from-left-and-right (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
        const n = code.length;
        const res = new Uint32Array(n);

        if (k === 0) {
                return res;
        }

        let sum = 0;

        if (k > 0) {
                for (let l = 0, r = 1; r < n + k; r++) {
                        sum += code[r % n];

                        if (r - l < k) {
                                continue;
                        }

                        res[l++] = sum;
                        sum -= code[l];
                }
        }

        if (k < 0) {
                for (let l = n - 1, r = n - 2; r > k - 1; r--) {
                        sum += code[(r + n) % n];

                        if (r - l > k) {
                                continue;
                        }

                        res[l--] = sum;
                        sum -= code[l];
                }
        }

        return res;
};

export { decrypt };
