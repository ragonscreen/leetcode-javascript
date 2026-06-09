/**
 * 0273. Integer to English Words
 *
 * Link: https://leetcode.com/problems/integer-to-english-words/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-06-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 586,319
 * - Total Submissions: 1,673,450
 * - Acceptance Rate: 35.0%
 *
 * Similar Problems:
 * - integer-to-roman (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(log N)
 * Space Complexity: O(log N)
 * `N` = `num`
 *
 * @param {number} num
 * @return {string}
 */
const numberToWords = (num) => {
        if (num === 0) {
                return 'Zero';
        }

        const chunks = [];
        let sz = 0;

        while (num) {
                const d = num % 10;

                if (sz === 0) {
                        chunks.push([]);
                }

                chunks.at(-1).push(d);
                num = 0 | (num / 10);
                sz = (sz + 1) % 3;
        }

        const md = [
                undefined,
                'One',
                'Two',
                'Three',
                'Four',
                'Five',
                'Six',
                'Seven',
                'Eight',
                'Nine',
        ];

        const mten = [
                undefined,
                'Eleven',
                'Twelve',
                'Thirteen',
                'Fourteen',
                'Fifteen',
                'Sixteen',
                'Seventeen',
                'Eighteen',
                'Nineteen',
        ];

        const mty = [
                undefined,
                'Ten',
                'Twenty',
                'Thirty',
                'Forty',
                'Fifty',
                'Sixty',
                'Seventy',
                'Eighty',
                'Ninety',
        ];

        const mch = [undefined, 'Thousand', 'Million', 'Billion'];

        let res = '';

        for (let i = chunks.length - 1; i > -1; i--) {
                const [r, m, l] = chunks[i];
                const str = [];

                if (l) {
                        str.push(md[l], 'Hundred');
                }

                if (m) {
                        if (m === 1 && r !== 0) {
                                str.push(mten[r]);
                        } else {
                                str.push(mty[m]);
                        }
                }

                if (r && m !== 1) {
                        str.push(md[r]);
                }

                if (i !== 0 && str.length) {
                        str.push(mch[i]);
                }

                if (str.length) {
                        res += `${str.join(' ')} `;
                }
        }

        return res.trim();
};

export { numberToWords };
