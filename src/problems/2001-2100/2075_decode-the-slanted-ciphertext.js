/**
 * 2075. Decode the Slanted Ciphertext
 *
 * Link: https://leetcode.com/problems/decode-the-slanted-ciphertext/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 99,464
 * - Total Submissions: 147,024
 * - Acceptance Rate: 67.7%
 *
 * Similar Problems:
 * - diagonal-traverse (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
const decodeCiphertext = (encodedText, rows) => {
        const cols = encodedText.length / rows;
        let str = '';
        let start = 0;

        outer: while (true) {
                for (let i = 0, pos = start; i < rows; i++, pos += cols + 1) {
                        const char = encodedText[pos];

                        if (char === undefined) {
                                break outer;
                        }

                        str += char;
                }

                start++;
        }

        return str.trimEnd();
};

export { decodeCiphertext };
