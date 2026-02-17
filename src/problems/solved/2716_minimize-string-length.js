/**
 * 2716. Minimize String Length
 * Link: https://leetcode.com/problems/minimize-string-length/
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = (s) => {
        const set = new Set();

        for (const c of s) {
                if (!set.has(c)) {
                        set.add(c);
                }
        }

        return set.size;
};

export { minimizedStringLength };
