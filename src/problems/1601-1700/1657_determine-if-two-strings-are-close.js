/**
 * 1657. Determine if Two Strings Are Close
 *
 * Link: https://leetcode.com/problems/determine-if-two-strings-are-close/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sorting (topic_61049)
 * - Counting (topic_61062)
 * - Senior (position_senior)
 * - Weekly Contest 215 (contest_weekly-contest-215)
 *
 * Stats:
 * - Total Accepted: 598,597
 * - Total Submissions: 1,099,754
 * - Acceptance Rate: 54.4%
 *
 * Similar Problems:
 * - buddy-strings (Easy)
 * - minimum-number-of-steps-to-make-two-strings-anagram (Medium)
 * - minimum-swaps-to-make-strings-equal (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word1.length`
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
        const n = word1.length;

        if (n !== word2.length) {
                return false;
        }

        const map1 = new Uint32Array(26);
        const map2 = new Uint32Array(26);

        for (let i = 0; i < n; i++) {
                map1[word1.charCodeAt(i) - 97]++;
                map2[word2.charCodeAt(i) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
                if (!map1[i] ^ !map2[i]) {
                        return false;
                }
        }

        map1.sort();
        map2.sort();

        for (let i = 0; i < 26; i++) {
                if (map1[i] !== map2[i]) {
                        return false;
                }
        }

        return true;
};

export { closeStrings };
