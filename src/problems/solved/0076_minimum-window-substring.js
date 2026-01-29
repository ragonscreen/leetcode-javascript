/**
 * 0076. Minimum Window Substring
 * Link: https://leetcode.com/problems/minimum-window-substring/
 * Difficulty: Hard
 * Date: 2026-01-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window (Optimal)
 * Time Complexity: O(n + m)
 * Space Complexity: O(m)
 * `n` = length of `s`; `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
        if (t.length > s.length) {
                return '';
        }

        const ks = new Array(52).fill(0);
        const kt = new Array(52).fill(0);

        for (let i = 0; i < t.length; i++) {
                ks[getIdx(s[i])]++;
                kt[getIdx(t[i])]++;
        }

        let matches = 0;

        for (let i = 0; i < kt.length; i++) {
                matches += Math.min(kt[i], ks[i]);
        }

        let l = 0;
        let r = t.length - 1;
        let res = '';

        while (r < s.length) {
                let found = false;

                while (matches === t.length) {
                        found = true;
                        const i = getIdx(s[l++]);
                        ks[i]--;
                        matches -= ks[i] < kt[i] ? 1 : 0;
                }

                if (found && (!res || r - l + 2 < res.length)) {
                        res = s.slice(l - 1, r + 1);
                }

                if (s[++r]) {
                        const i = getIdx(s[r]);
                        ks[i]++;
                        matches += ks[i] <= kt[i] ? 1 : 0;
                }
        }

        return res;
};

/**
 * Implementation: Sliding Window
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `s`; `m` = number of unique characters in `s`
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow1 = (s, t) => {
        const checkValid = (ks, kt) => {
                for (let i = 0; i < kt.length; i++) {
                        if (kt[i] && ks[i] < kt[i]) {
                                return false;
                        }
                }

                return true;
        };

        if (t.length > s.length) {
                return '';
        }

        const ks = new Array(52).fill(0);
        const kt = new Array(52).fill(0);

        for (let i = 0; i < t.length; i++) {
                ks[getIdx(s[i])]++;
                kt[getIdx(t[i])]++;
        }

        let l = 0;
        let r = t.length - 1;
        let res = '';

        while (r < s.length) {
                while (checkValid(ks, kt)) {
                        if (!res || r - l + 1 < res.length) {
                                res = s.slice(l, r + 1);
                        }

                        ks[getIdx(s[l++])]--;
                }

                if (s[++r]) {
                        ks[getIdx(s[r])]++;
                }
        }

        return res;
};

const getIdx = (c) => {
        return c === c.toLowerCase()
                ? c.charCodeAt() - 'a'.charCodeAt()
                : c.charCodeAt() - 'A'.charCodeAt() + 26;
};

export { minWindow, minWindow1 };
