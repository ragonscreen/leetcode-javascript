/**
 * 1813. Sentence Similarity III
 *
 * Link: https://leetcode.com/problems/sentence-similarity-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 132,325
 * - Total Submissions: 273,061
 * - Acceptance Rate: 48.5%
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * `n` = length of `sentence1`, `m` = length of `sentence2`
 *
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = (sentence1, sentence2) => {
        const a1 = sentence1.split(' ');
        const a2 = sentence2.split(' ');
        const n1 = a1.length;
        const n2 = a2.length;

        // check front
        let furthestFront;
        let valid = true;
        let p = 0;
        let q = 0;

        while (p < n1 && q < n2) {
                if (a1[p++] !== a2[q++]) {
                        furthestFront = p - 2;
                        valid = false;
                        break;
                }
        }

        if (valid) {
                return true;
        }

        // check back
        let furthestBack;
        valid = true;
        p = n1 - 1;
        q = n2 - 1;

        while (p > -1 && q > -1) {
                if (a1[p--] !== a2[q--]) {
                        furthestBack = Math.min(p, q) + 2;
                        valid = false;
                        break;
                }
        }

        if (valid) {
                return true;
        }

        // check middle
        return furthestBack - furthestFront <= 1;
};

export { areSentencesSimilar };
