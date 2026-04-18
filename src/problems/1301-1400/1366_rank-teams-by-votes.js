/**
 * 1366. Rank Teams by Votes
 *
 * Link: https://leetcode.com/problems/rank-teams-by-votes/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sorting (topic_61049)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 102,461
 * - Total Submissions: 170,588
 * - Acceptance Rate: 60.1%
 *
 * Similar Problems:
 * - online-election (Medium)
 */

/**
 * Approach: Sorting + Hash Map
 * Time Complexity: O(m * n + m^2 log m) = O(26 * n + 26^2 log 26) = O(n)
 * Space Complexity: O(m * 26) = O(26 * 26) = O(1)
 *
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = (votes) => {
        const m = votes[0].length;
        const A = 'A'.charCodeAt();
        const mthPlace = Array.from({ length: m }, () => new Array(26).fill(0));

        for (const vote of votes) {
                for (let i = 0; i < m; i++) {
                        const chr = vote[i];
                        const ord = chr.charCodeAt() - A;
                        mthPlace[i][ord]++;
                }
        }

        return [...votes[0]]
                .sort((a, b) => {
                        const ordA = a.charCodeAt() - A;
                        const ordB = b.charCodeAt() - A;

                        for (let i = 0; i < m; i++) {
                                const pos = mthPlace[i];
                                const va = pos[ordA];
                                const vb = pos[ordB];

                                if (va !== vb) {
                                        return vb - va;
                                }
                        }

                        return a.localeCompare(b);
                })
                .join('');
};

export { rankTeams };
