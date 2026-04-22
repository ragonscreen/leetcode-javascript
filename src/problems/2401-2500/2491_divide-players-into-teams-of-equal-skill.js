/**
 * 2491. Divide Players Into Teams of Equal Skill
 *
 * Link: https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 203,136
 * - Total Submissions: 294,684
 * - Acceptance Rate: 68.9%
 *
 * Similar Problems:
 * - max-number-of-k-sum-pairs (Medium)
 * - minimum-moves-to-equal-array-elements (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers = (skill) => {
        const n = skill.length;
        let min = skill[0];
        let max = skill[0];

        for (let i = 0; i < n; i++) {
                const num = skill[i];
                min = Math.min(min, num);
                max = Math.max(max, num);
        }

        const val = min + max;
        const map = new Map();
        let res = 0;
        let teamsLeft = n >> 1;

        for (let i = 0; i < n; i++) {
                const num = skill[i];
                const pair = val - num;
                const cntPair = map.get(pair);

                if (cntPair) {
                        map.set(pair, cntPair - 1);
                        res += num * pair;
                        teamsLeft -= 1;
                } else {
                        map.set(num, (map.get(num) || 0) + 1);
                }
        }

        return teamsLeft ? -1 : res;
};

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers1 = (skill) => {
        skill.sort((a, b) => a - b);
        const n = skill.length;
        const val = skill[0] + skill[n - 1];
        let res = 0;

        for (let i = 0; i < n >> 1; i++) {
                const nl = skill[i];
                const nr = skill[n - 1 - i];

                if (nl + nr !== val) {
                        return -1;
                }

                res += nl * nr;
        }

        return res;
};

export { dividePlayers, dividePlayers1 };
