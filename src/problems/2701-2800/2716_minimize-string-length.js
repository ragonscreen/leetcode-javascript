/**
 * 2716. Minimize String Length
 *
 * Link: https://leetcode.com/problems/minimize-string-length/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 78,709
 * - Total Submissions: 99,674
 * - Acceptance Rate: 79.0%
 *
 * Similar Problems:
 * - remove-all-adjacent-duplicates-in-string (Easy)
 * - remove-all-adjacent-duplicates-in-string-ii (Medium)
 */

/**
 * Approach: Hash Set
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
