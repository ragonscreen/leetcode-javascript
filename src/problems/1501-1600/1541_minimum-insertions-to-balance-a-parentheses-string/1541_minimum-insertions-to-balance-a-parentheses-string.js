/**
 * 1541. Minimum Insertions to Balance a Parentheses String
 *
 * Link: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Bracket Sequences (topic_122055)
 * - Staff (position_staff)
 * - Biweekly Contest 32 (contest_biweekly-contest-32)
 *
 * Stats:
 *
 * - Total Accepted: 164,921
 * - Total Submissions: 271,055
 * - Acceptance Rate: 60.8%
 *
 * Similar Problems:
 *
 * - minimum-number-of-swaps-to-make-the-string-balanced (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * To understand this approach, the reader is advised to go through the stack approach first. This
 * operates on the same idea, just using a running total of open parens instead of a stack. The
 * reason this works becomes clear after realising that in the stack approach the only character
 * being pushed into the stack is '('.
 *
 * @param {string} s
 * @returns {number}
 */
const minInsertions = (s) => {
        const n = s.length;
        let res = 0;
        let cntOpen = 0;

        for (let i = 0; i < n; i++) {
                if (s.charCodeAt(i) === 40) {
                        cntOpen++;
                        continue;
                }

                if (i < n - 1 && s.charCodeAt(i + 1) === 41) {
                        // branchless
                        //     if (cntOpen > 0) cntOpen--;
                        //     else res++;
                        res += cntOpen <= 0;
                        i++;
                } else {
                        // branchless
                        //     if (cntOpen > 0) {
                        //         cntOpen--;
                        //         res++;
                        //     } else {
                        //         res += 2;
                        //     }
                        res += cntOpen > 0 || 2;
                }

                cntOpen = Math.max(0, cntOpen - 1);
        }

        return res + 2 * cntOpen;
};

/**
 * Approach: Stack + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * The `replaceAll()` call can be dropped in favour of a lookahead during the main loop. It is used
 * purely for convenience.
 *
 * @param {string} s
 * @returns {number}
 */
const minInsertions1 = (s) => {
        const str = s.replaceAll('))', ']');
        const st = [];
        let res = 0;

        for (const c of str) {
                if (c === '(') {
                        st.push(c);
                } else if (c === ']') {
                        const top = st.at(-1);

                        if (top === '(') st.pop();
                        else res++;
                } else {
                        const top = st.at(-1);

                        if (top === '(') {
                                res++;
                                st.pop();
                        } else {
                                res += 2;
                        }
                }
        }

        return res + st.length * 2;
};

export { minInsertions, minInsertions1 };
