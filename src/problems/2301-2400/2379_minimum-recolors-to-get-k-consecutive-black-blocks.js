/**
 * 2379. Minimum Recolors to Get K Consecutive Black Blocks
 *
 * Link: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 230,280
 * - Total Submissions: 335,617
 * - Acceptance Rate: 68.6%
 *
 * Similar Problems:
 * - max-consecutive-ones-iii (Medium)
 * - maximum-number-of-vowels-in-a-substring-of-given-length (Medium)
 * - maximum-points-you-can-obtain-from-cards (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
const minimumRecolors = (blocks, k) => {
        const n = blocks.length;
        let res = n + 1;
        let countWhite = 0;

        for (let l = 0, r = 0; r < n; r++) {
                if (blocks[r] === 'W') {
                        countWhite++;
                }

                if (r - l + 1 === k) {
                        res = Math.min(res, countWhite);

                        if (blocks[l] === 'W') {
                                countWhite--;
                        }

                        l++;
                }
        }

        return res;
};

export { minimumRecolors };
