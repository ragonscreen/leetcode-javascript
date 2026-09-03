/**
 * 3720. Lexicographically Smallest Permutation Greater Than Target
 *
 * Link: https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Weekly Contest 472 (contest_weekly-contest-472)
 *
 * Stats:
 *
 * - Total Accepted: 90,811
 * - Total Submissions: 188,087
 * - Acceptance Rate: 48.3%
 */

/**
 * Approach: Greedy [II]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {string} target
 * @returns {string}
 */
const lexGreaterPermutation = (s, target) => {
        const n = s.length;
        const map = new Int32Array(26);

        for (let i = 0; i < n; i++) {
                map[s.charCodeAt(i) - 97]++;
                map[target.charCodeAt(i) - 97]--;
        }

        let ng = 0; // chars unavailable in `s`
        let mx = -1; // greatest char available

        for (let c = 0; c < 26; c++) {
                const cnt = map[c];
                ng += cnt < 0;
                mx = cnt > 0 ? c : mx;
        }

        for (let i = n - 1; i > -1; i--) {
                const cur = target.charCodeAt(i) - 97;
                const frq = ++map[cur];

                if (frq === 0) {
                        ng--;
                } else if (frq === 1) {
                        mx = Math.max(mx, cur);
                }

                // prefix cannot be formed here because invalid chars exist OR
                // greatest char available is <= `cur`
                if (ng > 0 || mx <= cur) {
                        continue;
                }

                // find smallest char greater than `target[i]`
                let nxt = cur + 1;

                while (map[nxt] === 0) {
                        nxt++;
                }

                // keep original prefix, add diff char, then add sorted chars
                map[nxt]--;
                let res = target.slice(0, i) + String.fromCharCode(nxt + 97);

                for (let c = 0; c < 26; c++) {
                        res += String.fromCharCode(c + 97).repeat(map[c]);
                }

                return res;
        }

        return '';
};

/**
 * Approach: Greedy [I]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {string} target
 * @returns {string}
 */
const lexGreaterPermutation1 = (s, target) => {
        const n = s.length;
        const map = new Int32Array(26);

        for (let i = 0; i < n; i++) {
                map[s.charCodeAt(i) - 97]++;
                map[target.charCodeAt(i) - 97]--;
        }

        outer: for (let i = n - 1; i > -1; i--) {
                const cur = target.charCodeAt(i) - 97;
                map[cur]++;

                // check if prefix can be formed
                for (let c = 0; c < 26; c++) {
                        if (map[c] < 0) {
                                continue outer;
                        }
                }

                // find smallest char greater than target[i]
                let nxt = cur + 1;

                while (map[nxt] === 0) {
                        nxt++;
                }

                // no such char exists
                if (nxt === 26) {
                        continue;
                }

                // keep original prefix, add diff char, then add sorted chars
                map[nxt]--;
                let res = target.slice(0, i) + String.fromCharCode(nxt + 97);

                for (let c = 0; c < 26; c++) {
                        res += String.fromCharCode(c + 97).repeat(map[c]);
                }

                return res;
        }

        return '';
};

export { lexGreaterPermutation, lexGreaterPermutation1 };
