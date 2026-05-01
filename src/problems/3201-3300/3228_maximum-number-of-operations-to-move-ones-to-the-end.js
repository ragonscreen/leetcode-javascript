/**
 * 3228. Maximum Number of Operations to Move Ones to the End
 *
 * Link: https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 125,126
 * - Total Submissions: 186,462
 * - Acceptance Rate: 67.1%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const maxOperations = (s) => {
        const n = s.length;
        let res = 0;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += s[i] ^ 0;

                if (s[i] ^ 1) {
                        while (i < n && s[i] ^ 1) {
                                i++;
                        }

                        res += cnt;
                        i--;
                }
        }

        return res;
};

export { maxOperations };
