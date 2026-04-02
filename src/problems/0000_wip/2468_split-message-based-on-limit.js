/**
 * 2468. Split Message Based on Limit
 *
 * Link: https://leetcode.com/problems/split-message-based-on-limit/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Enumeration (topic_61066)
 *
 * Stats:
 * - Total Accepted: 22,478
 * - Total Submissions: 53,385
 * - Acceptance Rate: 42.1%
 *
 * Similar Problems:
 * - search-a-2d-matrix (Medium)
 * - sentence-screen-fitting (Medium)
 * - text-justification (Hard)
 */
/** biome-ignore-all lint/nursery/noExcessiveLinesPerFile: <explanation> */
/** biome-ignore-all lint/correctness/noUnusedVariables: <explanation> */
/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
/** biome-ignore-all lint/style/useConst: <explanation> */

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
const splitMessage = (message, limit) => {
        let l = 1;
        let r = message.length;
        let upperBound = 0;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                console.log({
                        l,
                        r,
                        curPartCount: m,
                });

                const partLengthBase = Math.floor(message.length / m);
                const partLengthMax = partLengthBase + 3 + 2 * digitsInNum(m);
                const parts = getParts(m);
                const charsAdded = getChunk(parts, partLengthBase);

                if (partLengthMax <= limit) {
                        r = m;
                } else {
                        l = m + 1;
                }

                // if (charsAdded >= message.length) {
                //         upperBound = Math.max(upperBound, m);
                // }

                console.log({
                        mn: message.length,
                        partLengthBase,
                        partLengthMax,
                        parts,
                        charsAdded,
                });
        }

        console.log();
        console.log({ r });
};

// const splitMessage = (message, limit) => {
//         let l = 1;
//         let r = message.length;

//         while (l < r) {
//                 const m = l + Math.floor((r - l) / 2);

//                 console.log({
//                         l,
//                         r,
//                         curPartCount: m,
//                 });

//                 const partLengthBase = Math.floor(message.length / m);
//                 const partLengthMax = partLengthBase + 3 + 2 * digitsInNum(m);
//                 const parts = getParts(m);
//                 const charsAdded = getChunk(parts, partLengthBase);

//                 if (partLengthMax <= limit) {
//                         r = m;
//                 } else {
//                         l = m + 1;
//                 }

//                 console.log({
//                         mn: message.length,
//                         partLengthBase,
//                         partLengthMax,
//                         parts,
//                         charsAdded,
//                 });
//         }

//         console.log();
//         console.log({ r });
// };

const digitsInNum = (num) => Math.floor(Math.log10(num)) + 1;

const getParts = (num) => {
        const digits = digitsInNum(num);
        const parts = new Array(digits);
        let _num = num;
        let pow = 1;

        for (let i = 0; i < parts.length; i++) {
                let val = 9 * 10 ** (pow - 1);

                if (_num >= val) {
                        _num -= val;
                } else {
                        val = _num;
                }

                parts[i] = val;
                pow++;
        }

        return parts;
};

const getChunk = (parts, partLengthBase) => {
        const n = parts.length;
        let ptr = 0;

        for (let i = 0; i < n; i++) {
                ptr += parts[i] * (partLengthBase + (n - i - 1));
        }

        return ptr;
};

// const getParts = (num) => {
//         const parts = [];
//         let _num = num;
//         let pow = 1;

//         while (_num > 9 * 10 ** (pow - 1)) {
//                 const factor = 9 * 10 ** (pow - 1);
//                 _num -= factor;
//                 // parts.push(pow * factor);
//                 parts.push(factor);
//                 pow++;
//         }

//         parts.push(_num);
//         // parts.push(_num * pow);

//         return parts;
// };

// const splitMessage = (message, limit) => {
//         if (limit < 7) {
//                 return [];
//         }

//         let l = 1;
//         let r = message.length;
//         let res = 0;

//         while (l <= r) {
//                 const bestPartCount = l + Math.floor((r - l) / 2);
//                 const lenBase = Math.floor(message.length / bestPartCount);
//                 const lenMax = lenBase + 3 + 2 * d(bestPartCount);
//                 const parts = getParts(bestPartCount);
//                 const chunked = chunk2(message, bestPartCount, parts);

//                 if (lenMax > limit || !chunked) {
//                         l = bestPartCount + 1;
//                 } else {
//                         r = bestPartCount - 1;

//                         // const bestPartCount = 12;
//                         // const lenBase = Math.floor(message.length / bestPartCount);
//                         // const lenMax = lenBase + 3 + 2 * d(bestPartCount);

//                         console.log({
//                                 bestPartCount,
//                                 lenMax,
//                                 parts,
//                                 chunklen: chunked.length,
//                         });
//                         console.log(chunked);
//                         console.log();

//                         res = Math.max(res, chunked.length);
//                 }
//         }

//         console.log(res);
// };

// // const bestPartCount = 12;
// // const lenBase = Math.floor(message.length / bestPartCount);
// // const lenMax = lenBase + 3 + 2 * d(bestPartCount);
// // const parts = getParts(bestPartCount);
// // const chunked = chunk2(message, bestPartCount, parts);

// // console.log({ bestPartCount, lenMax, parts, chunklen: chunked.length });
// // console.log(chunked);
// // console.log();

// const d = (num) => Math.floor(Math.log10(num)) + 1;

// const chunk = (str, len) => {
//         const res = [];

//         for (let i = 0; i < str.length; i += len) {
//                 res.push(str.slice(i, i + len));
//         }

//         return res;
// };

// const chunk2 = (str, bestChunk, parts) => {
//         // console.log({ strlen: str.length, bestChunk });

//         const len = Math.floor(str.length / bestChunk);
//         const res = [];
//         let ptr = 0;

//         for (let i = 0; i < str.length; ) {
//                 // console.log(parts);

//                 parts[ptr]--;

//                 const right = len + parts.length - ptr;

//                 if (parts[ptr] === 0) {
//                         ptr++;

//                         if (ptr === parts.length) {
//                                 return null;
//                         }
//                 }

//                 res.push(str.slice(i, i + right));
//                 i += right;
//         }

//         return res;
// };

// const getParts = (num) => {
//         const parts = [];
//         let _num = num;
//         let pow = 1;

//         while (_num > 9 * 10 ** (pow - 1)) {
//                 const factor = 9 * 10 ** (pow - 1);
//                 _num -= factor;
//                 // parts.push(pow * factor);
//                 parts.push(factor);
//                 pow++;
//         }

//         parts.push(_num);
//         // parts.push(_num * pow);

//         return parts;
// };

// // while (l <= r) {
// // const bestChunk = l + Math.floor((r - l) / 2);
// // const lenBase = Math.floor(message.length / bestChunk);
// // const lenMax = lenBase + 3 + 2 * d(bestChunk);

// // console.log({ lenMax });

// // if (lenMax <= limit) {
// //         r = bestChunk - 1;
// // } else {
// //         l = bestChunk + 1;
// //         const parts = getParts(bestChunk);
// //         const chunked = chunk2(message, bestChunk, parts);
// //         res = Math.max(res, chunked.length);
// //         console.log({ bestChunk, lenBase, lenMax });
// //         console.log({ parts });
// //         console.log(chunked);
// //         console.log({ chunklen: chunked.length });
// // }

// // }

// // const bestChunk = l + Math.floor((r - l) / 2);

// // if lenMax <= limit decrease bestPartCount

// // console.log({ res });

// // const totalParts = l + Math.floor((r - l) / 2);
// // const bestChunk = 15;

// // const pn = parts.length;
// // let ptr = 0;
// // console.log(parts);

// // for (let i = 0; i < pn; i++) {
// //         ptr += (pn - i) * parts[i];
// //         console.log({ ptr });
// // }

// // console.log({ mn: message.length });

export { splitMessage };
