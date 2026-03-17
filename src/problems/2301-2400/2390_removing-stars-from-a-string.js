/**
 * 2390. Removing Stars From a String
 *
 * Link: https://leetcode.com/problems/removing-stars-from-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 610,242
 * - Total Submissions: 771,979
 * - Acceptance Rate: 79.0%
 *
 * Similar Problems:
 * - backspace-string-compare (Easy)
 * - remove-all-adjacent-duplicates-in-string (Easy)
 */

/**
 * Approach: Simulation [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
        const res = [];
        let rem = 0;

        for (let i = s.length - 1; i >= 0; i--) {
                const c = s[i];

                if (c === '*') {
                        rem++;
                        continue;
                }

                if (rem) {
                        rem--;
                        continue;
                }

                res.push(c);
        }

        return res.reverse().join('');
};

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {string}
 */
const removeStars1 = (s) => {
        const stack = [];

        for (const c of s) {
                if (c === '*') {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { removeStars, removeStars1 };
