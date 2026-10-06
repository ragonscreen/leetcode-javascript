/**
 * 2468. Split Message Based on Limit
 *
 * Link: https://leetcode.com/problems/split-message-based-on-limit/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Enumeration (topic_61066)
 *
 * Stats:
 *
 * - Total Accepted: 22,478
 * - Total Submissions: 53,385
 * - Acceptance Rate: 42.1%
 *
 * Similar Problems:
 *
 * - search-a-2d-matrix (Medium)
 * - sentence-screen-fitting (Medium)
 * - text-justification (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `message.length`
 *
 * @param {string} message
 * @param {number} limit
 * @returns {string[]}
 */
const splitMessage = (message, limit) => {
        if (limit < 6) return [];

        const n = message.length;

        for (let parts = 1, digLen = 1, totDigLen = 0, nxt = 10; parts <= n; parts++) {
                if (parts === nxt) {
                        digLen++;
                        nxt *= 10;
                }

                totDigLen += digLen;
                const rem = parts * (limit - 3 - digLen) - totDigLen;

                if (rem < n) continue;

                const res = new Array(parts);

                for (let pi = 1, i = 0; pi <= parts; pi++) {
                        const sr = `<${pi}/${parts}>`;
                        const size = limit - sr.length;
                        const sl = message.slice(i, i + size);
                        res[pi - 1] = sl + sr;
                        i += size;
                }

                return res;
        }

        return [];
};

/**
 * Approach: Binary Search
 * Time Complexity: O(n lg^2 n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `message.length`
 *
 * @param {string} message
 * @param {number} limit
 * @returns {string[]}
 */
const splitMessage1 = (message, limit) => {
        const n = message.length;

        const check = (parts) => {
                const idxl = Math.floor(Math.log10(parts)) + 1;

                if (limit <= 3 + 2 * idxl) return false;

                let idxn = 10;
                let ptr = 0;
                let idx = 1;
                let add = 1;

                while (ptr < n && idx <= parts) {
                        if (idx === idxn) {
                                idxn *= 10;
                                add++;
                        }

                        const sz = 3 + idxl + add;
                        const chars = limit - sz;
                        ptr += chars;
                        idx++;
                }

                return ptr >= n;
        };

        const bound = 10 ** (Math.floor(Math.log10(n)) + 2);
        let mx = 10;
        let ok = 0;

        while (mx < bound) {
                let ng = ok;
                ok = mx;

                while (Math.abs(ok - ng) > 1) {
                        const mid = (ok + ng) >> 1;
                        if (check(mid)) ok = mid;
                        else ng = mid;
                }

                if (ok < mx) break;

                mx *= 10;
        }

        if (mx === bound) return [];

        const res = new Array(ok);

        for (let part = 1, i = 0; part <= ok; part++) {
                const sr = `<${part}/${ok}>`;
                const size = limit - sr.length;
                const sl = message.slice(i, i + size);
                i += size;
                res[part - 1] = sl + sr;
        }

        return res;
};

export { splitMessage, splitMessage1 };
