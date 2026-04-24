/**
 * 0423. Reconstruct Original Digits from English
 *
 * Link: https://leetcode.com/problems/reconstruct-original-digits-from-english/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 99,926
 * - Total Submissions: 189,122
 * - Acceptance Rate: 52.8%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(26 + 10) = O(1) auxiliary, O(k) total
 * `n` = length of `s`, `k` = total count of all digits
 *
 * @param {string} s
 * @return {string}
 */
const originalDigits = (s) => {
        /*
        0: [z] e r o
        2: t [w] o
        4: f o [u] r
        6: s i [x]
        8: e i [g] h t

        3: t [h] r e e
        7: [s] e v e n
        5: f i [v] e
        9: n [i] n e
        1: o [n] e
        */

        const ord = (c) => c.charCodeAt() - 97;
        const map = new Uint32Array(26);

        for (const c of s) {
                map[ord(c)]++;
        }

        const cnt = new Uint32Array(10);

        // 0 -> z
        cnt[0] = map[ord('z')];

        // 2 -> w
        cnt[2] = map[ord('w')];

        // 4 -> u
        cnt[4] = map[ord('u')];

        // 6 -> x
        const cntX = map[ord('x')];
        cnt[6] = cntX;
        map[ord('s')] -= cntX;
        map[ord('i')] -= cntX;

        // 8 -> g
        const cntG = map[ord('g')];
        cnt[8] = cntG;
        map[ord('i')] -= cntG;
        map[ord('h')] -= cntG;

        // 3 -> h
        cnt[3] = map[ord('h')];

        // 7 -> s
        const cntS = map[ord('s')];
        cnt[7] = cntS;
        map[ord('n')] -= cntS;
        map[ord('v')] -= cntS;

        // 5 -> v
        const cntV = map[ord('v')];
        cnt[5] = cntV;
        map[ord('i')] -= cntV;

        // 9 -> i
        const cntI = map[ord('i')];
        cnt[9] = cntI;
        map[ord('n')] -= 2 * cntI;

        // 1 -> n
        cnt[1] = map[ord('n')];

        let res = '';

        for (let i = 0; i <= 9; i++) {
                res += String(i).repeat(cnt[i]);
        }

        return res;
};

export { originalDigits };
