/**
 * 0948. Bag of Tokens
 *
 * Link: https://leetcode.com/problems/bag-of-tokens/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 267,590
 * - Total Submissions: 448,996
 * - Acceptance Rate: 59.6%
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = (tokens, power) => {
        tokens.sort((a, b) => a - b);
        const n = tokens.length;
        let score = 0;

        if (power < tokens[0]) {
                return score;
        }

        let res = 0;
        let l = 0;
        let r = n - 1;

        while (l <= r) {
                while (power >= tokens[l]) {
                        power -= tokens[l++];
                        score++;
                }

                res = Math.max(res, score);

                if (score) {
                        power += tokens[r--];
                        score--;
                }
        }

        return res;
};

export { bagOfTokensScore };
