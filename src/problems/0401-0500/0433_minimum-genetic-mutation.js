/**
 * 433. Minimum Genetic Mutation
 *
 * Link: https://leetcode.com/problems/minimum-genetic-mutation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Breadth-First Search (topic_22)
 * - Bidirectional Search (topic_97547)
 *
 * Stats:
 *
 * - Total Accepted: 298,697
 * - Total Submissions: 522,800
 * - Acceptance Rate: 57.1%
 *
 * Similar Problems:
 *
 * - word-ladder (Hard)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n * k^2)
 * Space Complexity: O(n * k)
 * `n` = `bank.length`, `k` = `startGene.length`
 *
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @returns {number}
 */
const minMutation = (startGene, endGene, bank) => {
        if (startGene === endGene) return 0;

        const set = new Set(bank);
        if (!set.has(endGene)) return -1;

        const vis = new Set([startGene, endGene]);
        let q1 = [startGene];
        let res = 0;

        while (q1.length) {
                const q2 = [];
                res++;

                for (const word of q1) {
                        for (let i = 0; i < 8; i++) {
                                const c = word[i];

                                for (const d of 'ACTG') {
                                        if (d === c) continue;

                                        const nxt = word.slice(0, i) + d + word.slice(i + 1);
                                        if (nxt === endGene) return res;

                                        if (set.has(nxt) && !vis.has(nxt)) {
                                                q2.push(nxt);
                                                vis.add(nxt);
                                        }
                                }
                        }
                }

                q1 = q2;
        }

        return -1;
};

export { minMutation };
