/**
 * 0012. Integer to Roman
 *
 * Link: https://leetcode.com/problems/integer-to-roman/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 2,079,337
 * - Total Submissions: 2,945,797
 * - Acceptance Rate: 70.6%
 *
 * Similar Problems:
 * - roman-to-integer (Easy)
 * - integer-to-english-words (Hard)
 */

/**
 * Approach: Hash Map + Math + Simulation
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
        const map = [
                ['M', 1000],
                ['CM', 900],
                ['D', 500],
                ['CD', 400],
                ['C', 100],
                ['XC', 90],
                ['L', 50],
                ['XL', 40],
                ['X', 10],
                ['IX', 9],
                ['V', 5],
                ['IV', 4],
                ['I', 1],
        ];

        let n = num;
        let res = '';

        for (const [c, v] of map) {
                if (n >= v) {
                        const t = Math.floor(n / v);
                        res += c.repeat(t);
                        n -= t * v;
                }

                if (n === 0) {
                        break;
                }
        }

        return res;
};

export { intToRoman };
