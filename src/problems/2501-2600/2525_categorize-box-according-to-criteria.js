/**
 * 2525. Categorize Box According to Criteria
 *
 * Link: https://leetcode.com/problems/categorize-box-according-to-criteria/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 50,339
 * - Total Submissions: 129,562
 * - Acceptance Rate: 38.9%
 *
 * Similar Problems:
 * - best-poker-hand (Easy)
 * - find-winner-on-a-tic-tac-toe-game (Easy)
 * - fizz-buzz (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
const categorizeBox = (length, width, height, mass) => {
        const volume = length * width * height;
        let type = 'Neither';

        if (length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4) {
                type = 'Bulky';
        }

        if (volume >= 10 ** 9) {
                type = 'Bulky';
        }

        if (mass >= 100) {
                if (type === 'Bulky') {
                        type = 'Both';
                } else {
                        type = 'Heavy';
                }
        }

        return type;
};

export { categorizeBox };
