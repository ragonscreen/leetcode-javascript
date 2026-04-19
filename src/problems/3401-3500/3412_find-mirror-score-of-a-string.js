/**
 * 3412. Find Mirror Score of a String
 *
 * Link: https://leetcode.com/problems/find-mirror-score-of-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 25,184
 * - Total Submissions: 70,713
 * - Acceptance Rate: 35.6%
 */

/**
 * Approach: Hash Map + Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const calculateScore = (s) => {
        const map = new Array(26); // map of stack of indices
        let res = 0;

        for (let i = 0; i < s.length; i++) {
                const val = s[i].charCodeAt() - 'a'.charCodeAt();
                const mirrorIdx = map[Math.abs(25 - val)];

                if (mirrorIdx?.length) {
                        res += i - mirrorIdx.pop();
                } else {
                        map[val] ??= [];
                        map[val].push(i);
                }
        }

        return res;
};

export { calculateScore };
