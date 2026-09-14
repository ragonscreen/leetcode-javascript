/**
 * 1044. Longest Duplicate Substring
 *
 * Link: https://leetcode.com/problems/longest-duplicate-substring/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Rolling Hash (topic_56598)
 * - Suffix Array (topic_56698)
 * - Hash Function (topic_61065)
 * - Suffix Automaton (topic_75820)
 * - Suffix Tree (topic_75824)
 * - Z Algorithm (topic_86036)
 * - Boyer–Moore String-Search Algorithm (topic_122019)
 * - Principal (position_principal)
 * - Weekly Contest 136 (contest_weekly-contest-136)
 *
 * Stats:
 *
 * - Total Accepted: 89,237
 * - Total Submissions: 283,748
 * - Acceptance Rate: 31.4%
 */

/**
 * Approach: Rolling Hash + Binary Search
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
const longestDupSubstring = (s) => {
        const n = s.length;
        const BASE = 31;
        const MOD = 1e9 + 7;
        const POW = new Uint32Array(n);
        POW[0] = 1;

        for (let i = 1; i < n; i++) POW[i] = (POW[i - 1] * BASE) % MOD;

        if (new Set(s).size === n) return '';

        const hmap = new Map();

        const check = (sz) => {
                hmap.clear();

                let hash = 0;

                for (let i = 0; i < sz; i++) hash = (hash * BASE + s.charCodeAt(i) - 96) % MOD;

                hmap.set(hash, []);
                hmap.get(hash).push(sz - 1);

                for (let i = sz; i < n; i++) {
                        hash =
                                (((hash - POW[sz - 1] * (s.charCodeAt(i - sz) - 96)) % MOD) + MOD) %
                                MOD;
                        hash = (hash * BASE + s.charCodeAt(i) - 96) % MOD;

                        if (hmap.has(hash)) {
                                for (const j of hmap.get(hash)) {
                                        const s1 = s.slice(j - sz + 1, j + 1);
                                        const s2 = s.slice(i - sz + 1, i + 1);

                                        if (s1 === s2) return s2;
                                }
                        }

                        if (!hmap.has(hash)) hmap.set(hash, []);
                        hmap.get(hash).push(i);
                }

                return '';
        };

        let ok = 1;
        let ng = n + 1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) ok = mid;
                else ng = mid;
        }

        return check(ok);
};

export { longestDupSubstring };
