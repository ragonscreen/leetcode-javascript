/**
 * 2333. Minimum Sum of Squared Difference
 *
 * Link: https://leetcode.com/problems/minimum-sum-of-squared-difference/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Staff (position_staff)
 * - Biweekly Contest 82 (contest_biweekly-contest-82)
 *
 * Stats:
 *
 * - Total Accepted: 45,984
 * - Total Submissions: 127,837
 * - Acceptance Rate: 36.0%
 *
 * Similar Problems:
 *
 * - minimum-absolute-sum-difference (Medium)
 * - partition-array-into-two-arrays-to-minimize-sum-difference (Hard)
 */

/**
 * Approach: Binary Search + Greedy
 * Time Complexity: O(n lg K)
 * Space Complexity: O(n)
 * `n` = `nums1.length`, `K` = `max(abs(nums1[i] - nums2[i]))`
 *
 * The idea behind this approach is the same as the other one, only without sorting the diffs array.
 * Notice that since we find the smallest value each diff can be made, and each smaller value is
 * ignored during before the simulation begins, we can instead safely ignore them during the
 * simulation itself.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @returns {number}
 */
const minSumSquareDiff = (nums1, nums2, k1, k2) => {
        const n = nums1.length;
        const diffs = new Uint32Array(n);
        const mxMoves = k1 + k2;
        let mxDiff = 0;
        let diffSum = 0;
        let res = 0;

        for (let i = 0; i < n; i++) {
                const diff = Math.abs(nums1[i] - nums2[i]);
                diffs[i] = diff;
                mxDiff = Math.max(mxDiff, diff);
                diffSum += diff;
                res += diff * diff;
        }

        if (diffSum <= mxMoves) return 0;
        if (mxMoves === 0) return res;

        const check = (target) => {
                let moves = 0;

                for (let i = 0; i < n; i++) moves += Math.max(0, diffs[i] - target);

                return moves <= mxMoves;
        };

        let ok = mxDiff + 1;
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) ok = mid;
                else ng = mid;
        }

        const target = ok;
        let movesRem = mxMoves;

        for (let i = 0; i < n; i++) {
                const diff = diffs[i];
                const val = Math.max(0, diff - target);
                movesRem -= val;
                res -= val * (diff + target); // a ** 2 - b ** 2 = (a - b) * (a + b)
        }

        if (movesRem === 0) return res;

        const change = 2 * target - 1; // a ** 2 - (a - 1) ** 2 = 2a - 1
        res -= movesRem * change;

        return res;
};

/**
 * Approach: Sorting + Binary Search + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums1.length`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @returns {number}
 */
const minSumSquareDiff1 = (nums1, nums2, k1, k2) => {
        const n = nums1.length;
        const diffs = new Uint32Array(n);
        const mxMoves = k1 + k2;
        let diffSum = 0;
        let res = 0;

        for (let i = 0; i < n; i++) {
                const diff = Math.abs(nums1[i] - nums2[i]);
                diffs[i] = diff;
                diffSum += diff;
                res += diff * diff;
        }

        if (diffSum <= mxMoves) return 0;
        if (mxMoves === 0) return res;

        diffs.sort();

        // binary search to find the smallest value each diffs[i] can be made
        // if a value is smaller than this value, leave it as it is
        const check = (target) => {
                let moves = 0;
                let i = 0;

                while (diffs[i] <= target) i++;

                for (; i < n; i++) moves += diffs[i] - target;

                return moves <= mxMoves;
        };

        let ok = diffs[n - 1] + 1;
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) ok = mid;
                else ng = mid;
        }

        const target = ok;
        let i = 0;

        while (diffs[i] <= target) i++;

        let movesRem = mxMoves;

        // replace every value >= target with target and count the moves required to do so
        // instead of accessing the array to change, we simply simulate the change by calculating
        //   the difference of squares
        for (; i < n; i++) {
                const diff = diffs[i];
                const val = diff - target;
                movesRem -= val;
                res -= val * (diff + target); // a ** 2 - b ** 2 = (a - b) * (a + b)
        }

        if (movesRem === 0) return res;

        // if we still have moves left then decrease max value as much as possible
        // since we replaced every value >= target with target, target is max
        const change = 2 * target - 1; // a ** 2 - (a - 1) ** 2 = 2a - 1
        res -= movesRem * change;

        return res;
};

export { minSumSquareDiff, minSumSquareDiff1 };
