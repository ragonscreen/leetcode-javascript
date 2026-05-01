/**
 * 2672. Number of Adjacent Elements With the Same Color
 *
 * Link: https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 33,542
 * - Total Submissions: 56,438
 * - Acceptance Rate: 59.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(q)
 * Space Complexity: O(N) auxiliary, O(N + q) total
 * `N` = n, `q` = length of `queries`
 *
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const colorTheArray = (n, queries) => {
        const q = queries.length;
        const nums = new Uint32Array(n);
        const res = new Uint32Array(q);
        let cnt = 0;

        for (let j = 0; j < q; j++) {
                const [i, c] = queries[j];
                const num = nums[i];

                if (c === num) {
                        res[j] = cnt;
                        continue;
                }

                if (num) {
                        if (num === nums[i - 1]) {
                                cnt--;
                        }

                        if (num === nums[i + 1]) {
                                cnt--;
                        }
                }

                nums[i] = c;

                if (c === nums[i - 1]) {
                        cnt++;
                }

                if (c === nums[i + 1]) {
                        cnt++;
                }

                res[j] = cnt;
        }

        return res;
};

export { colorTheArray };
