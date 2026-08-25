/**
 * 3016. Minimum Number of Pushes to Type Word II
 *
 * Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Counting (topic_61062)
 * - Staff (position_staff)
 * - Weekly Contest 381 (contest_weekly-contest-381)
 *
 * Stats:
 * - Total Accepted: 318,013
 * - Total Submissions: 381,713
 * - Acceptance Rate: 83.3%
 *
 * Similar Problems:
 * - letter-combinations-of-a-phone-number (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @return {number}
 */
const minimumPushes = (word) => {
        const map = new Uint32Array(26);

        for (let i = 0; i < word.length; i++) {
                map[word.charCodeAt(i) - 97]++;
        }

        map.sort();
        let res = 0;

        for (let i = 0; i < 26; i++) {
                const frq = map[25 - i];
                const cnt = (i >> 3) + 1;
                res += frq * cnt;
        }

        return res;
};

export { minimumPushes };
