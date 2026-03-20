/**
 * 3306. Count of Substrings Containing Every Vowel and K Consonants II
 *
 * Link: https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 114,227
 * - Total Submissions: 281,073
 * - Acceptance Rate: 40.6%
 *
 * Similar Problems:
 * - count-vowel-substrings-of-a-string (Easy)
 * - longest-substring-of-all-vowels-in-order (Medium)
 */

/**
 * Approach: Sliding Window + Three Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countOfSubstrings = (word, k) => {
        const getKey = (char) => {
                const vowels = 'aeiou';

                return vowels.includes(char) ? char : 'c';
        };

        const map = new Map();
        let res = 0;

        for (let l = 0, m = 0, r = 0; r < word.length; r++) {
                const keyR = getKey(word[r]);
                map.set(keyR, (map.get(keyR) || 0) + 1);

                if (map.get('c') > k) {
                        while (map.get('c') > k) {
                                const keyM = getKey(word[m]);
                                map.set(keyM, map.get(keyM) - 1);

                                if (map.get(keyM) === 0) {
                                        map.delete(keyM);
                                }

                                m++;
                        }

                        l = m;
                }

                while (
                        getKey(word[m]) !== 'c' &&
                        map.get(getKey(word[m])) > 1
                ) {
                        const keyM = getKey(word[m]);
                        map.set(keyM, map.get(keyM) - 1);
                        m++;
                }

                const maxSize = k ? 6 : 5;

                if (map.size === maxSize && (!k || map.get('c') === k)) {
                        res += m - l + 1;
                }
        }

        return res;
};

export { countOfSubstrings };
