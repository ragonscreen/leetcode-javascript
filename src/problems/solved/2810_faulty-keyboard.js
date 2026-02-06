/**
 * 2810. Faulty Keyboard
 * Link: https://leetcode.com/problems/faulty-keyboard/
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers in bi-directional array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const finalString = (s) => {
        const n = s.length;
        const dq = new Array(n * 2).fill(null);
        let dir = 1;
        let l = -1;
        let r = 0;

        for (const c of s) {
                if (c === 'i') {
                        dir *= -1;
                        continue;
                }

                const p = dir === 1 ? r++ : l--;
                dq[p + n] = c;
        }

        return dir === 1 ? dq.join('') : dq.reverse().join('');
};

/**
 * Implementation: Iteration
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const finalString1 = (s) => {
        const res = [];

        for (const c of s) {
                if (c === 'i') {
                        res.reverse();
                } else {
                        res.push(c);
                }
        }

        return res.join('');
};

export { finalString, finalString1 };
