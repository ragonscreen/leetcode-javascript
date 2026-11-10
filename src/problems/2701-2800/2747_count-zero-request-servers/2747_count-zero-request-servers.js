/**
 * 2747. Count Zero Request Servers
 *
 * Link: https://leetcode.com/problems/count-zero-request-servers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Biweekly Contest 107 (contest_biweekly-contest-107)
 *
 * Stats:
 *
 * - Total Accepted: 79,464
 * - Total Submissions: 134,941
 * - Acceptance Rate: 58.9%
 */

/**
 * Approach: Sorting + Sliding Window
 * Time Complexity: O(N + m lg m + q lg q)
 * Space Complexity: O(N + q) auxiliary, O(N + m + q) total
 * `N` = `n`, `m` = `logs.length`, `q` = `queries.length`
 *
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @returns {number[]}
 */
const countServers = (n, logs, x, queries) => {
        const m = logs.length;
        const q = queries.length;
        const qidx = Uint32Array.from({ length: q }, (_, i) => i);
        const frq = new Uint32Array(n + 1);
        const res = new Uint32Array(q);
        qidx.sort((i, j) => queries[i] - queries[j]);
        logs.sort((a, b) => a[1] - b[1]);

        for (let qi = 0, l = 0, r = 0, cnt = 0; qi < q; qi++) {
                const qii = qidx[qi];
                const qt = queries[qii];

                while (r < m && logs[r][1] <= qt) if (++frq[logs[r++][0]] === 1) cnt++;
                while (l < r && logs[l][1] < qt - x) if (--frq[logs[l++][0]] === 0) cnt--;

                res[qii] = n - cnt;
        }

        return res;
};

export { countServers };
