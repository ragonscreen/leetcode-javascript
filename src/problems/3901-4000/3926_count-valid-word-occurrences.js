/**
 * 3926. Count Valid Word Occurrences
 *
 * Link: https://leetcode.com/problems/count-valid-word-occurrences/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 18,014
 * - Total Submissions: 39,646
 * - Acceptance Rate: 45.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(k + q)
 * Space Complexity: O(m) auxiliary, O(m + q) total
 * `k` = sum of lengths of `chunks[i]`, `q` = length of `queries`
 * `m` = total number of valid words across `chunks`
 *
 * @param {string[]} chunks
 * @param {string[]} queries
 * @return {number[]}
 */
const countWordOccurrences = (chunks, queries) => {
        const n = chunks.length;
        const map = new Map();
        let lastWord = '';
        let word = '';
        let lastSeenHyp = false;

        for (let i = 0; i < n; i++) {
                const chunk = chunks[i];
                const m = chunk.length;

                for (let j = 0; j < m; j++) {
                        const c = chunk[j];
                        const isSpc = c === ' ';
                        const isHyp = c === '-';

                        if (!word && (isSpc || isHyp)) {
                                continue;
                        }

                        if (isSpc || (isHyp && lastSeenHyp)) {
                                const val = lastSeenHyp ? lastWord : word;
                                map.set(val, (map.get(val) || 0) + 1);
                                word = '';
                                lastWord = '';
                                lastSeenHyp = false;
                                continue;
                        }

                        lastWord = word;
                        word += c;
                        lastSeenHyp = isHyp;
                }
        }

        if (word) {
                const val = lastSeenHyp ? lastWord : word;
                map.set(val, (map.get(val) || 0) + 1);
        }

        const q = queries.length;
        const res = new Array(q);

        for (let i = 0; i < q; i++) {
                res[i] = map.get(queries[i]) || 0;
        }

        return res;
};

/**
 * Approach: Simulation
 * Time Complexity: O(k + q)
 * Space Complexity: O(m) auxiliary, O(m + q) total
 * `k` = sum of lengths of `chunks[i]`, `q` = length of `queries`
 * `m` = total number of valid words across `chunks`
 *
 * @param {string[]} chunks
 * @param {string[]} queries
 * @return {number[]}
 */
const countWordOccurrences1 = (chunks, queries) => {
        const a = chunks.join('').split(/\s|-{2,}/g);

        for (let i = 0; i < a.length; i++) {
                if (a[i][0] === '-') {
                        a[i] = a[i].slice(1);
                }

                if (a[i].at(-1) === '-') {
                        a[i] = a[i].slice(0, a[i].length - 1);
                }
        }

        const map = new Map();

        for (const c of a) {
                map.set(c, (map.get(c) || 0) + 1);
        }

        const q = queries.length;
        const res = new Array(q);

        for (let i = 0; i < q; i++) {
                res[i] = map.get(queries[i]) || 0;
        }

        return res;
};

export { countWordOccurrences, countWordOccurrences1 };
