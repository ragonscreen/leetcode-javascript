/**
 * 3703. Remove K-Balanced Substrings
 *
 * Link: https://leetcode.com/problems/remove-k-balanced-substrings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 19,876
 * - Total Submissions: 60,875
 * - Acceptance Rate: 32.7%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeSubstring = (s, k) => {
        const stack = [];

        for (const c of s) {
                if (!stack.length) {
                        if (c === '(') {
                                stack.push(['(', 1]);
                        } else {
                                stack.push([')', -1]);
                        }

                        continue;
                }

                const [topC, topV] = stack.at(-1);

                if (c === '(') {
                        if (topC === '(') {
                                stack.push(['(', topV + 1]);
                        } else {
                                stack.push(['(', 1]);
                        }

                        continue;
                }

                // c === ')'
                if (topC === '(') {
                        // valid removals for k = 1
                        if (k === 1) {
                                stack.pop();
                                continue;
                        }

                        // streak not possible - not enough openings
                        if (topV < k) {
                                stack.push([')', -1]);
                                continue;
                        }

                        // start new closing streak
                        stack.push([')', 1]);
                } else {
                        // add to impossible closing streak
                        if (topV < 0) {
                                stack.push([')', -1]);
                                continue;
                        }

                        // closing streak didn't materialise, must be impossible now
                        if (topV > k) {
                                stack.push([')', -1]);
                                continue;
                        }

                        // add to possible closing streak
                        if (topV !== k - 1) {
                                stack.push([')', topV + 1]);
                                continue;
                        }

                        // valid removals for k > 1
                        for (let i = 0; i < 2 * k - 1; i++) {
                                stack.pop();
                        }
                }
        }

        let res = '';

        for (const [c, _] of stack) {
                res += c;
        }

        return res;
};

export { removeSubstring };
