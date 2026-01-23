/**
 * 0003. Longest Substring Without Repeating Characters
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 * Date: 2026-01-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `s`; `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
        const set = new Set();
        let max = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
                const c = s[r];

                if (set.has(c)) {
                        max = Math.max(max, r - l);
                }

                while (set.has(c)) {
                        set.delete(s[l++]);
                }

                set.add(c);
                r++;
        }

        max = Math.max(max, r - l);

        return max;
};

export { lengthOfLongestSubstring };
