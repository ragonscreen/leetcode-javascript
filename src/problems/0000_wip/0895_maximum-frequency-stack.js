/**
 * 0895. Maximum Frequency Stack
 *
 * Link: https://leetcode.com/problems/maximum-frequency-stack/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-02-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Stack (topic_15)
 * - Design (topic_25)
 * - Ordered Set (topic_61070)
 *
 * Stats:
 * - Total Accepted: 223,548
 * - Total Submissions: 335,139
 * - Acceptance Rate: 66.7%
 */

/**
 * NOTES:
 * Use priority queue?
 *
 * Approach:
 */
class FreqStack {
        /**
         * Time Complexity: O()
         * Space Complexity: O()
         */
        constructor() {}

        /**
         * Time Complexity: O()
         * Space Complexity: O()
         *
         * @param {number} val
         * @return {void}
         */
        push(val) {}

        /**
         * Time Complexity: O()
         * Space Complexity: O()
         *
         * @return {number}
         */
        pop() {}
}

// TLE
// class FreqStack {
//         /**
//          * Time Complexity: O()
//          * Space Complexity: O()
//          */
//         constructor() {
//                 this.map = new Map();
//                 this.idx = 0;
//         }

//         /**
//          * Time Complexity: O()
//          * Space Complexity: O()
//          *
//          * @param {number} val
//          * @return {void}
//          */
//         push(val) {
//                 const arr = this.map.get(val) ?? [];
//                 arr.push(this.idx);
//                 this.map.set(val, arr);
//                 this.idx++;
//         }

//         /**
//          * Time Complexity: O()
//          * Space Complexity: O()
//          *
//          * @return {number}
//          */
//         pop() {
//                 let res = 0;
//                 let maxFrq = 0;

//                 for (const [num, indices] of this.map) {
//                         const frq = indices.length;

//                         if (frq > maxFrq) {
//                                 maxFrq = frq;
//                                 res = num;
//                         } else if (frq === maxFrq) {
//                                 const idxNum = indices.at(-1);
//                                 const idxRes = this.map.get(res).at(-1);

//                                 if (idxNum > idxRes) {
//                                         res = num;
//                                 }
//                         }
//                 }

//                 this.map.get(res).pop();

//                 return res;
//         }
// }

export { FreqStack };
