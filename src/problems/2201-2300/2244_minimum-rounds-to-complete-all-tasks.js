/**
 * 2244. Minimum Rounds to Complete All Tasks
 *
 * Link: https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 173,497
 * - Total Submissions: 274,152
 * - Acceptance Rate: 63.3%
 *
 * Similar Problems:
 * - climbing-stairs (Easy)
 * - odd-string-difference (Easy)
 * - minimum-levels-to-gain-more-points (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) => {
        const map = new Map();

        for (const num of tasks) {
                map.set(num, (map.get(num) || 0) + 1);
        }

        let res = 0;

        for (const val of map.values()) {
                if (val === 1) {
                        return -1;
                }

                res += Math.ceil(val / 3);
        }

        return res;
};

export { minimumRounds };
