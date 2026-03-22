/**
 * 0554. Brick Wall
 *
 * Link: https://leetcode.com/problems/brick-wall/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 *
 * Stats:
 * - Total Accepted: 170,262
 * - Total Submissions: 303,956
 * - Acceptance Rate: 56.0%
 *
 * Similar Problems:
 * - number-of-ways-to-build-sturdy-brick-wall (Medium)
 */

/**
 * Approach: Hash Map + Prefix Sum [Optimal]
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `wall`, `m` = length of `wall[i]`
 *
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = (wall) => {
        const n = wall.length;
        const prefixMap = new Map();
        let maxPrefixFreq = 0;

        for (let i = 0; i < n; i++) {
                const row = wall[i];
                let prefix = 0;

                for (let j = 0; j < row.length - 1; j++) {
                        prefix += row[j];
                        const freq = (prefixMap.get(prefix) || 0) + 1;
                        prefixMap.set(prefix, freq);
                        maxPrefixFreq = Math.max(maxPrefixFreq, freq);
                }
        }

        return n - maxPrefixFreq;
};

/**
 * Approach: Hash Map + Prefix Sum
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `wall`, `m` = length of `wall[i]`
 *
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks1 = (wall) => {
        const n = wall.length;
        const prefixMap = new Map();

        for (let i = 0; i < n; i++) {
                const row = wall[i];
                let prefix = 0;

                for (let j = 0; j < row.length - 1; j++) {
                        prefix += row[j];
                        prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
                }
        }

        let maxNum = 0;
        let maxFrq = 0;

        for (const [num, frq] of prefixMap) {
                if (frq > maxFrq) {
                        maxFrq = frq;
                        maxNum = num;
                }
        }

        let res = 0;

        for (let i = 0; i < n; i++) {
                const row = wall[i];
                let onEdge = false;
                let prefix = 0;

                for (let j = 0; j < row.length - 1; j++) {
                        prefix += row[j];

                        if (prefix === maxNum) {
                                onEdge = true;
                                break;
                        }
                }

                if (!onEdge) {
                        res++;
                }
        }

        return res;
};

export { leastBricks, leastBricks1 };
