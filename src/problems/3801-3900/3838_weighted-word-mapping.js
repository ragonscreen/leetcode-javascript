/**
 * 3838. Weighted Word Mapping
 *
 * Link: https://leetcode.com/problems/weighted-word-mapping/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Simulation (topic_61055)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 176 (contest_biweekly-contest-176)
 *
 * Stats:
 * - Total Accepted: 77,858
 * - Total Submissions: 87,733
 * - Acceptance Rate: 88.7%
 */

/**
 * Approach:
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `words.length`, `m` = `words[i].length`
 *
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
const mapWordWeights = (words, weights) => {
        let res = '';

        for (let i = 0; i < words.length; i++) {
                const word = words[i];
                let val = 0;

                for (let j = 0; j < word.length; j++) {
                        const ord = word[j].charCodeAt() - 97;
                        val += weights[ord];
                }

                val = 25 - (val % 26);
                res += String.fromCharCode(val + 97);
        }

        return res;
};

export { mapWordWeights };
