/**
 * 0076. Minimum Window Substring
 * Link: https://leetcode.com/problems/minimum-window-substring/
 * Difficulty: Hard
 * Date: 2026-01-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */
/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: <explanation> */

// const getKeys = (s, t) => {
//         const keyS = {};
//         const keyT = {};

//         for (let i = 0; i < t.length; i++) {
//                 keyS[s[i]] = (keyS[s[i]] || 0) + 1;
//                 keyT[t[i]] = (keyT[t[i]] || 0) + 1;
//         }

//         return { keyS, keyT };
// };

const getKeys = (s, t) => {
        const keyS = new Array(52).fill(0);
        const keyT = new Array(52).fill(0);

        for (let i = 0; i < t.length; i++) {
                keyS[getIdx(s[i])]++;
                keyT[getIdx(t[i])]++;
        }

        return { keyS, keyT };
};

const getInitMatch = (keyS, keyT) => {
        let match = 0;

        for (let i = 0; i < 52; i++) {
                if (keyT[i] && keyS[i]) {
                        match += Math.min(keyT[i], keyS[i]);
                }
        }

        return match;
};

const getIdx = (c) => {
        const v = c.charCodeAt();

        return c === c.toUpperCase()
                ? v - 'A'.charCodeAt() + 26
                : v - 'a'.charCodeAt();
};

/**
 * Implementation:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
        if (t.length > s.length) {
                return '';
        }

        const { keyS, keyT } = getKeys(s, t);
        let match = getInitMatch(keyS, keyT);

        let [l, r, res, minLen] = [0, t.length, '', Number.MAX_SAFE_INTEGER];

        if (match === t.length) {
                return s.slice(0, t.length);
        }

        while (r < s.length) {
                const i = getIdx(s[r]);
                keyS[i]++;

                if (keyT[i] !== 0 && keyT[i] === keyS[i]) {
                        match += keyT[i];
                }

                while (match === t.length) {
                        const len = r - l + 1;

                        if (len < minLen) {
                                res = s.slice(l, r + 1);
                                minLen = len;
                        }

                        const i = getIdx(s[l]);
                        keyS[i]--;

                        if (keyT[i] !== 0 && keyT[i] !== keyS[i]) {
                                match--;
                        }

                        l++;
                }

                r++;
        }

        return res;
};

// const minWindow = (s, t) => {
//         if (t.length > s.length) {
//                 return '';
//         }

//         if (s === t) {
//                 return s;
//         }

//         const kt = new Array(52).fill(0);
//         const ks = new Array(52).fill(0);

//         for (let i = 0; i < t.length; i++) {
//                 kt[getIdx(t[i])]++;
//                 ks[getIdx(s[i])]++;
//         }

//         // console.log({ kt, ks });

//         let match = 0;

//         for (let i = 0; i < ks.length; i++) {
//                 match += kt[i] !== 0 && ks[i] === kt[i] ? 1 : 0;
//         }

//         // console.log({ match });

//         let l = 0;
//         let r = t.length;
//         let res = '';
//         let minSize = Number.MAX_SAFE_INTEGER;

//         if (match === t.length) {
//                 return s.slice(l, r);
//         }

//         while (r < s.length) {
//                 const i = getIdx(s[r]);
//                 ks[i]++;

//                 if (kt[i] !== 0 && ks[i] === kt[i]) {
//                         match++;
//                 }

//                 // console.log({ match, i });

//                 if (match === t.length) {
//                         // console.log({ l, sl: s[l], r, sr: s[r], match });

//                         const len = r - l + 1;

//                         if (len < minSize) {
//                                 res = s.slice(l, r + 1);
//                                 minSize = len;
//                         }

//                         while (r - l + 1 > t.length) {
//                                 const i = getIdx(s[l]);
//                                 ks[i]--;

//                                 if (kt[i] !== 0 && ks[i] === kt[i] - 1) {
//                                         match--;
//                                 }

//                                 l++;

//                                 if (match === t.length) {
//                                         const len = r - l + 1;

//                                         if (len < minSize) {
//                                                 res = s.slice(l, r + 1);
//                                                 minSize = len;
//                                         }
//                                 }
//                         }
//                 }

//                 r++;
//         }

//         if (match === t.length) {
//                 const len = r - l + 1;

//                 if (len < minSize) {
//                         res = s.slice(l, r + 1);
//                         minSize = len;
//                 }
//         }

//         return minSize === Number.MAX_SAFE_INTEGER ? '' : res;
// };

// const minWindow = (s, t) => {
//         if (t.length > s.length) {
//                 return '';
//         }

//         const ks = new Array(52).fill(0);
//         const kt = new Array(52).fill(0);

//         for (let i = 0; i < t.length; i++) {
//                 kt[getIdx(t[i])]++;
//                 ks[getIdx(s[i])]++;
//         }

//         let match = 0;

//         for (let i = 0; i < ks.length; i++) {
//                 const e = ks[i];

//                 if (e !== 0 && e === kt[i]) {
//                         match++;
//                 }
//         }

//         let l = 0;
//         let r = t.length;
//         let res = '';
//         let min = Number.MAX_SAFE_INTEGER;

//         if (match === t.length) {
//                 return s.slice(l, r);
//         }

//         while (r < s.length) {
//                 if (match === t.length) {
//                         if (r - l + 1 < min) {
//                                 min = r - l + 1;
//                                 res = s.slice(l, r);
//                         }

//                         while (r - l + 1 > t.length) {
//                                 const idx = getIdx(s[l]);
//                                 ks[idx]--;

//                                 if (kt[idx] !== 0) {
//                                         if (ks[idx] === kt[idx]) {
//                                                 match++;
//                                         }

//                                         if (ks[idx] === kt[idx] - 1) {
//                                                 match--;
//                                         }
//                                 }

//                                 l++;
//                         }
//                 }

//                 const idx = getIdx(s[r]);
//                 ks[idx]++;

//                 if (kt[idx] !== 0) {
//                         if (ks[idx] === kt[idx]) {
//                                 match++;
//                         }

//                         if (ks[idx] === kt[idx] + 1) {
//                                 match--;
//                         }
//                 }

//                 r++;
//         }

//         if (match === t.length) {
//                 res = s.slice(l, r);
//         }

//         return min === Number.MAX_SAFE_INTEGER ? '' : res;
// };

export { minWindow };
