/**
 * 0187. Repeated DNA Sequences
 *
 * Link: https://leetcode.com/problems/repeated-dna-sequences/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Bit Manipulation (topic_19)
 * - Sliding Window (topic_55821)
 * - Rolling Hash (topic_56598)
 * - Hash Function (topic_61065)
 *
 * Stats:
 * - Total Accepted: 529,534
 * - Total Submissions: 995,445
 * - Acceptance Rate: 53.2%
 */

/**
 * Approach: Bit Manipulation + Sliding Window
 * Time Complexity: O(n) average, O((n - 10) * 10) = O(n) worst
 * Space Complexity: O(n - 10) = O(n)
 *
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
        const frq = new Map();
        const res = [];
        const map = { A: 0, C: 1, G: 2, T: 3 };
        let hash = 0;

        for (let i = 0; i < s.length; i++) {
                // left shift by 2, OR in the new value, chop off top 2 bits to keep hash at 20 bits
                hash = ((hash << 2) | map[s[i]]) & ((1 << 20) - 1);

                if (i < 9) {
                        continue;
                }

                const cnt = frq.get(hash) || 0;

                if (cnt === 1) {
                        res.push(s.slice(i - 9, i + 1));
                }

                frq.set(hash, cnt + 1);
        }

        return res;
};

/**
 * Approach: Simulation
 * Time Complexity: O((n - 10) * 10) = O(n)
 * Space Complexity: O(n - 10) = O(n)
 *
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences1 = (s) => {
        const set = new Set();
        const found = new Set();

        for (let l = 0, r = 10; r <= s.length; l++, r++) {
                const str = s.slice(l, r);

                if (set.has(str)) {
                        found.add(str);
                } else {
                        set.add(str);
                }
        }

        return Array.from(found);
};

export { findRepeatedDnaSequences, findRepeatedDnaSequences1 };
