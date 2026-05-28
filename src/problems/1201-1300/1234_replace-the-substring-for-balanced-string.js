/**
 * 1234. Replace the Substring for Balanced String
 *
 * Link: https://leetcode.com/problems/replace-the-substring-for-balanced-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07 (Updated: 2026-05-28)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 48,223
 * - Total Submissions: 118,002
 * - Acceptance Rate: 40.9%
 */

/**
 * Approach: Sliding Window [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(20) = O(1)
 *
 * @param {string} s
 * @return {number}
 */
const balancedString = (s) => {
        const o = (c) => c.charCodeAt() - 69; // E
        const n = s.length;
        const m = 20; // E - W
        const need = new Uint32Array(m);

        for (let i = 0; i < n; i++) {
                need[o(s[i])]++;
        }

        const k = n / 4;

        for (let i = 0; i < m; i++) {
                need[i] = Math.max(0, need[i] - k);
        }

        const have = new Uint32Array(m);
        let cnt = 0;

        for (let i = 0; i < m; i++) {
                cnt += have[i] === need[i];
        }

        if (cnt === m) {
                return 0;
        }

        let res = n + 1;

        for (let l = 0, r = 0; r < n; r++) {
                const vr = o(s[r]);
                have[vr]++;
                cnt += have[vr] === need[vr];

                if (cnt === m) {
                        while (true) {
                                const vl = o(s[l++]);
                                const val = --have[vl];

                                if (val === need[vl] - 1) {
                                        break;
                                }
                        }

                        cnt--;
                        res = Math.min(res, r - l + 2);
                }
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(n * 22) = O(n)
 * Space Complexity: O(22) = O(1)
 *
 * @param {string} s
 * @return {number}
 */
const balancedString1 = (s) => {
        const o = (c) => c.charCodeAt() - 'E'.charCodeAt();
        const n = s.length;
        const map = new Uint32Array(22);

        for (let i = 0; i < n; i++) {
                map[o(s[i])]++;
        }

        const k = n / 4;
        const need = new Uint32Array(22);
        let needChange = false;

        for (let i = 0; i < 22; i++) {
                if (map[i] > k) {
                        needChange = true;
                        need[i] = map[i] - k;
                }
        }

        if (!needChange) {
                return 0;
        }

        const have = new Uint32Array(22);

        const check = () => {
                for (let i = 0; i < 22; i++) {
                        if (have[i] < need[i]) {
                                return false;
                        }
                }

                return true;
        };

        let res = n + 1;

        for (let l = 0, r = 0; r < n; r++) {
                have[o(s[r])]++;

                while (check()) {
                        res = Math.min(res, r - l + 1);
                        have[o(s[l++])]--;
                }
        }

        return res;
};

export { balancedString, balancedString1 };
