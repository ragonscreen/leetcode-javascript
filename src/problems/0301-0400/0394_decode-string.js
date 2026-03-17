/**
 * 0394. Decode String
 *
 * Link: https://leetcode.com/problems/decode-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 1,174,053
 * - Total Submissions: 1,882,770
 * - Acceptance Rate: 62.4%
 *
 * Similar Problems:
 * - brace-expansion (Medium)
 * - encode-string-with-shortest-length (Hard)
 * - number-of-atoms (Hard)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
        const stack = [];
        let strs = [];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
                const v = s[r];

                if (v !== '[' && v !== ']') {
                        continue;
                }

                if (v === '[') {
                        const l0 = l;

                        while (!Number(s[l])) {
                                l++;
                        }

                        const str = s.slice(l0, l);
                        const num = Number(s.slice(l, r));

                        if (str) {
                                stack.push(str);
                        }

                        stack.push(num);
                        l = r + 1;
                        continue;
                }

                const str = s.slice(l, r);

                if (str) {
                        stack.push(str);
                }

                while (!Number(stack.at(-1))) {
                        strs.push(stack.pop());
                }

                const count = stack.pop();
                const strNew = strs.reverse().join('').repeat(count);
                stack.push(strNew);
                strs = [];
                l = r + 1;
        }

        return stack.join('') + s.slice(l);
};

export { decodeString };
