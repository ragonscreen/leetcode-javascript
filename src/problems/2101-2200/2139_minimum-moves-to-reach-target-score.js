/**
 * 2139. Minimum Moves to Reach Target Score
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-reach-target-score/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 61,850
 * - Total Submissions: 118,097
 * - Acceptance Rate: 52.4%
 *
 * Similar Problems:
 * - number-of-steps-to-reduce-a-number-to-zero (Easy)
 * - number-of-steps-to-reduce-a-number-in-binary-representation-to-one (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(min(log n, m))
 * Space Complexity: O(1)
 * `n` = `target`
 *
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
const minMoves = (target, maxDoubles) => {
        let res = 0;

        while (target > 1) {
                if (!maxDoubles) {
                        res += target - 1;
                        break;
                }

                if (target % 2) {
                        target--;
                } else {
                        target /= 2;
                        maxDoubles--;
                }

                res++;
        }

        return res;
};

export { minMoves };
