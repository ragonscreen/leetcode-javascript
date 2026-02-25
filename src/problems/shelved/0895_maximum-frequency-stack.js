/**
 * 0895. Maximum Frequency Stack
 * Link: https://leetcode.com/problems/maximum-frequency-stack/
 * Difficulty: Hard
 * Date: 2026-02-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation:
 * Space Complexity: O()
 *
 * Use priority queue
 */
class FreqStack {
        /**
         * Time Complexity: O()
         */
        constructor() {
                this.map = new Map();
                this.idx = 0;
        }

        /**
         * Time Complexity: O()
         *
         * @param {number} val
         * @return {void}
         */
        push(val) {
                const arr = this.map.get(val) ?? [];
                arr.push(this.idx);
                this.map.set(val, arr);
                this.idx++;
        }

        /**
         * Time Complexity: O()
         *
         * @return {number}
         */
        pop() {
                let res = 0;
                let maxFrq = 0;

                for (const [num, indices] of this.map) {
                        const frq = indices.length;

                        if (frq > maxFrq) {
                                maxFrq = frq;
                                res = num;
                        } else if (frq === maxFrq) {
                                const idxNum = indices.at(-1);
                                const idxRes = this.map.get(res).at(-1);

                                if (idxNum > idxRes) {
                                        res = num;
                                }
                        }
                }

                this.map.get(res).pop();

                return res;
        }
}

export { FreqStack };
