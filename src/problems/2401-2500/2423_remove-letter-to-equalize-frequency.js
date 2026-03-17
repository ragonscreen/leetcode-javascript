/**
 * 2423. Remove Letter To Equalize Frequency
 *
 * Link: https://leetcode.com/problems/remove-letter-to-equalize-frequency/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-01-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 75,502
 * - Total Submissions: 392,082
 * - Acceptance Rate: 19.3%
 *
 * Similar Problems:
 * - minimum-deletions-to-make-character-frequencies-unique (Medium)
 * - maximum-equal-frequency (Hard)
 */

/**
 * Approach: Frequency Counting
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} word
 * @return {boolean}
 */

const equalFrequency = (word) => {
        const arr = new Array(26).fill(0);

        for (const c of word) {
                arr[c.charCodeAt() - 'a'.charCodeAt()]++;
        }

        let min = Number.MAX_SAFE_INTEGER;
        let max = 0;
        let minIdx = 0;
        let maxIdx = 0;

        for (let i = 0; i < arr.length; i++) {
                const e = arr[i];

                if (e === 0) {
                        continue;
                }

                if (e < min) {
                        min = e;
                        minIdx = i;
                }

                if (e > max) {
                        max = e;
                        maxIdx = i;
                }
        }

        let isValid = true;
        arr[minIdx]--;
        let val = null;

        for (const e of arr) {
                if (e === 0) {
                        continue;
                }

                val ??= e;

                if (e !== val) {
                        isValid = false;
                        break;
                }
        }

        if (isValid) {
                return true;
        }

        isValid = true;
        arr[minIdx]++;
        arr[maxIdx]--;
        val = null;

        for (const e of arr) {
                if (e === 0) {
                        continue;
                }

                val ??= e;

                if (e !== val) {
                        isValid = false;
                        break;
                }
        }

        return isValid;
};

export { equalFrequency };
