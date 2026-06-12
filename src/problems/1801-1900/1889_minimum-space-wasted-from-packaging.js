/**
 * 1889. Minimum Space Wasted From Packaging
 *
 * Link: https://leetcode.com/problems/minimum-space-wasted-from-packaging/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-06-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 * - Prefix Sum (topic_61068)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 244 (contest_weekly-contest-244)
 *
 * Stats:
 * - Total Accepted: 18,237
 * - Total Submissions: 54,275
 * - Acceptance Rate: 33.6%
 */

/**
 * Approach: Sorting + Greedy + Prefix Sum
 * Time Complexity: O(n + k + s * lg s)
 * Space Complexity: O(k) auxiliary, O(s) for sorting, O(k + s) total
 * `n` = `packages.length`, `k` = `max(packages[i])`
 * `s` = `sum(boxes[j].length)`
 *
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
const minWastedSpace = (packages, boxes) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const MOD = 1e9 + 7;
        const n = packages.length;
        const m = boxes.length;
        const mx = Math.max(...packages) + 1;
        const p = new Uint32Array(mx);
        let sum = 0;

        for (let i = 0; i < n; i++) {
                const val = packages[i];
                sum += val;
                p[val]++;
        }

        for (let i = 1; i < mx; i++) {
                p[i] += p[i - 1];
        }

        let res = INF;

        for (let j = 0; j < m; j++) {
                boxes[j].sort((a, b) => a - b);
                const box = boxes[j];

                if (box.at(-1) < mx - 1) {
                        continue;
                }

                let tot = 0;

                for (let cnt = 0, k = 0; cnt < n && k < box.length; k++) {
                        const sz = box[k];
                        const val = p[Math.min(sz, mx - 1)] - cnt;
                        cnt += val;
                        tot += sz * val;
                }

                res = Math.min(res, tot);
        }

        return res === INF ? -1 : (res - sum) % MOD;
};

/**
 * Approach: Sorting + Binary Search
 * Time Complexity: O(n * lg n + m * w * (lg w + lg n))
 * Space Complexity: O(m * w) for sorting
 * `n` = `packages.length`, `m` = `boxes.length`
 * `w` = `boxes[j].length`
 *
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
const minWastedSpace1 = (packages, boxes) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const MOD = 1e9 + 7;
        const n = packages.length;
        const m = boxes.length;
        packages.sort((a, b) => a - b);
        const mx = packages.at(-1);
        let res = INF;
        let sum = 0;

        for (let i = 0; i < n; i++) {
                sum += packages[i];
        }

        for (let j = 0; j < m; j++) {
                boxes[j].sort((a, b) => a - b);
                const box = boxes[j];

                if (box.at(-1) < mx) {
                        continue;
                }

                let tot = 0;
                let i = -1;

                for (let k = 0; k < box.length; k++) {
                        const sz = box[k];
                        let ok = i;
                        let ng = n + 1;

                        while (Math.abs(ok - ng) > 1) {
                                const mid = (ok + ng) >> 1;
                                const val = packages[mid];

                                if (val <= sz) {
                                        ok = mid;
                                } else {
                                        ng = mid;
                                }
                        }

                        tot += sz * (ok - i);
                        i = ok;
                }

                res = Math.min(res, tot);
        }

        return res === INF ? -1 : (res - sum) % MOD;
};

export { minWastedSpace, minWastedSpace1 };
