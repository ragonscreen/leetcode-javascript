/**
 * 3096. Minimum Levels to Gain More Points
 *
 * Link: https://leetcode.com/problems/minimum-levels-to-gain-more-points/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 27,716
 * - Total Submissions: 68,772
 * - Acceptance Rate: 40.3%
 *
 * Similar Problems:
 * - minimum-rounds-to-complete-all-tasks (Medium)
 */

/**
 * Approach: Prefix Sum [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} possible
 * @return {number}
 */
const minimumLevels = (possible) => {
        const n = possible.length;
        let cntB = 0;

        for (let i = 0; i < n; i++) {
                cntB += 2 * possible[i] - 1;
        }

        let cntA = 0;

        for (let i = 0; i < n - 1; i++) {
                const cnt = 2 * possible[i] - 1;
                cntA += cnt;
                cntB -= cnt;

                if (cntA > cntB) {
                        return i + 1;
                }
        }

        return -1;
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} possible
 * @return {number}
 */
const minimumLevels1 = (possible) => {
        const n = possible.length;
        const pre = new Int32Array(n);
        let sum = 0;

        for (let i = n - 1; i > 0; i--) {
                // branchless possible[i] ? 1 : -1;
                sum += 2 * possible[i] - 1;
                pre[i] = sum;
        }

        sum = 0;

        for (let i = 0; i < n - 1; i++) {
                sum += 2 * possible[i] - 1;

                if (sum > pre[i + 1]) {
                        return i + 1;
                }
        }

        return -1;
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} possible
 * @return {number}
 */
const minimumLevels2 = (possible) => {
        const n = possible.length;
        const pre = new Int32Array(n);
        let sum = 0;

        for (let i = 0; i < n - 1; i++) {
                sum += possible[i] ? 1 : -1;
                pre[i] = sum;
        }

        const pre2 = new Int32Array(n);
        sum = 0;

        for (let i = n - 1; i > 0; i--) {
                sum += possible[i] ? 1 : -1;
                pre2[i] = sum;
        }

        for (let i = 0; i < n - 1; i++) {
                if (pre[i] > pre2[i + 1]) {
                        return i + 1;
                }
        }

        return -1;
};

export { minimumLevels, minimumLevels1, minimumLevels2 };
