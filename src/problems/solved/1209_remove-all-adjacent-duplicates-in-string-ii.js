/**
 * 1209. Remove All Adjacent Duplicates in String II
 * Link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * Difficulty: Medium
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
        const stackChar = [];
        const stackFreq = [];

        for (const char of s) {
                let freq = 1;

                if (stackChar.at(-1) === char) {
                        freq = stackFreq.at(-1) + 1;
                }

                if (freq === k) {
                        for (let i = 0; i < k - 1; i++) {
                                stackChar.pop();
                                stackFreq.pop();
                        }
                } else {
                        stackChar.push(char);
                        stackFreq.push(freq);
                }
        }

        return stackChar.join('');
};

export { removeDuplicates };
