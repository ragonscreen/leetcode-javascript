/**
 * 0171. Excel Sheet Column Number
 *
 * Link: https://leetcode.com/problems/excel-sheet-column-number/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 890,628
 * - Total Submissions: 1,321,510
 * - Acceptance Rate: 67.4%
 *
 * Similar Problems:
 * - cells-in-a-range-on-an-excel-sheet (Easy)
 * - excel-sheet-column-title (Easy)
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
        const n = columnTitle.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
                const p = n - i - 1;
                const v = columnTitle.charCodeAt(i) - 64;
                res += 26 ** p * v;
        }

        return res;
};

export { titleToNumber };
