/**
 * 0316. Remove Duplicate Letters
 *
 * Link: https://leetcode.com/problems/remove-duplicate-letters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 485,881
 * - Total Submissions: 894,341
 * - Acceptance Rate: 54.3%
 *
 * Similar Problems:
 * - lexicographically-smallest-string-after-deleting-duplicate-characters (Hard)
 * - smallest-k-length-subsequence-with-occurrences-of-a-letter (Hard)
 */

/**
 * Approach: Greedy + Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
        const ord = (c) => c.charCodeAt() - 97;
        const n = s.length;
        const last = new Uint32Array(26);

        for (let i = 0; i < n; i++) {
                last[ord(s[i])] = i;
        }

        const have = new Uint8Array(26);
        const stack = [];

        for (let i = 0; i < n; i++) {
                const c = s[i];
                const v = ord(c);

                if (have[v]) {
                        continue;
                }

                while (c < stack.at(-1)) {
                        const tv = ord(stack.at(-1));

                        if (i < last[tv]) {
                                stack.pop();
                                have[tv] = 0;
                        } else {
                                break;
                        }
                }

                stack.push(c);
                have[v] = 1;
        }

        return stack.join('');
};

export { removeDuplicateLetters };
