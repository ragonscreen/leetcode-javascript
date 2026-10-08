/**
 * 1775. Equal Sum Arrays With Minimum Number of Operations
 *
 * Link: https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 * - Staff (position_staff)
 * - Weekly Contest 230 (contest_weekly-contest-230)
 *
 * Stats:
 *
 * - Total Accepted: 37,391
 * - Total Submissions: 68,026
 * - Acceptance Rate: 55.0%
 *
 * Similar Problems:
 *
 * - number-of-dice-rolls-with-target-sum (Medium)
 */

/**
 * Approach: Greedy [II]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `nums1.length`, `m` = `nums2.length`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const minOperations = (nums1, nums2) => {
        const n = nums1.length;
        const m = nums2.length;

        if (n * 6 < m || m * 6 < n) return -1;

        const gains1 = new Uint32Array(6);
        const gains2 = new Uint32Array(6);
        let diff = 0;

        for (const num of nums1) {
                diff += num;
                gains1[num - 1]++;
                gains2[6 - num]++;
        }

        for (const num of nums2) {
                diff -= num;
                gains1[6 - num]++;
                gains2[num - 1]++;
        }

        if (diff === 0) return 0;

        // if diff > 0 then subtract vals from nums1 and add vals from nums2
        //     this is tracked in gains1
        // else, the opposite, i.e. add vals from nums1 and subtract vals from nums2
        //     this is tracked in gains2
        const gains = diff > 0 ? gains1 : gains2;
        diff = Math.abs(diff);
        let res = 0;

        for (let gain = 5; diff > 0; gain--) {
                const need = Math.ceil(diff / gain);
                const have = gains[gain];
                const take = Math.min(need, have);
                res += take;
                diff -= take * gain;
        }

        return res;
};

/**
 * Approach: Greedy
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `nums1.length`, `m` = `nums2.length`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const minOperations1 = (nums1, nums2) => {
        const n = nums1.length;
        const m = nums2.length;

        if (n * 6 < m || m * 6 < n) return -1;

        let cnt1 = new Uint32Array(7);
        let cnt2 = new Uint32Array(7);
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < n; i++) {
                const num = nums1[i];
                sum1 += num;
                cnt1[num]++;
        }

        for (let i = 0; i < m; i++) {
                const num = nums2[i];
                sum2 += num;
                cnt2[num]++;
        }

        let diff = sum1 - sum2;

        if (diff === 0) return 0;

        if (diff < 0) [cnt1, cnt2] = [cnt2, cnt1];

        diff = Math.abs(diff);
        let res = 0;
        let p = 6;
        let q = 1;

        while (diff > 0) {
                while (cnt1[p] === 0) p--;
                while (cnt2[q] === 0) q++;

                const v1 = p - 1;
                const v2 = 6 - q;

                if (v1 >= v2) {
                        const need = Math.ceil(diff / v1);
                        const have = cnt1[p];
                        const take = Math.min(need, have);
                        res += take;
                        diff -= take * v1;
                        cnt1[p] -= take;
                } else {
                        const need = Math.ceil(diff / v2);
                        const have = cnt2[q];
                        const take = Math.min(need, have);
                        res += take;
                        diff -= take * v2;
                        cnt2[q] -= take;
                }
        }

        return res;
};

export { minOperations, minOperations1 };
