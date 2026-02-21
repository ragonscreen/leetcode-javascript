/**
 * 0394. Decode String
 * Link: https://leetcode.com/problems/decode-string/
 * Difficulty: Medium
 * Date: 2026-02-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
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
