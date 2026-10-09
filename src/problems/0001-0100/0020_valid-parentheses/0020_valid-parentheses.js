/**
 * 20. Valid Parentheses
 *
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2025-12-17 (Updated: 2026-10-09)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 *
 * - Total Accepted: 7,315,118
 * - Total Submissions: 16,697,997
 * - Acceptance Rate: 43.8%
 *
 * Similar Problems:
 *
 * - check-if-a-parentheses-string-can-be-valid (Medium)
 * - check-if-word-is-valid-after-substitutions (Medium)
 * - generate-parentheses (Medium)
 * - move-pieces-to-obtain-a-string (Medium)
 * - longest-valid-parentheses (Hard)
 * - remove-invalid-parentheses (Hard)
 */

/**
 * Approach: Stack [II]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {boolean}
 */
const isValid = (s) => {
        const n = s.length;
        const mp = new Uint8Array(126);
        mp[41] = 40; // ) : (
        mp[93] = 91; // ] : [
        mp[125] = 123; // } : {
        const st = new Uint8Array(n);
        let sp = 0;

        for (let i = 0; i < n; i++) {
                const v = s.charCodeAt(i);

                if (mp[v]) {
                        if (st[sp - 1] === mp[v]) sp--;
                        else return false;
                } else {
                        st[sp++] = v;
                }
        }

        return sp === 0;
};

/**
 * Approach: Stack [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {boolean}
 */
const isValid1 = (s) => {
        const map = {
                ')': '(',
                '}': '{',
                ']': '[',
        };

        const stack = [];

        for (const c of s) {
                if (!map[c]) {
                        stack.push(c);
                        continue;
                }

                if (stack.at(-1) === map[c]) stack.pop();
                else return false;
        }

        return !stack.length;
};

export { isValid, isValid1 };
