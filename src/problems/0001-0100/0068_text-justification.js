/**
 * 0068. Text Justification
 *
 * Link: https://leetcode.com/problems/text-justification/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 636,794
 * - Total Submissions: 1,258,362
 * - Acceptance Rate: 50.6%
 *
 * Similar Problems:
 * - divide-a-string-into-groups-of-size-k (Easy)
 * - rearrange-spaces-between-words (Easy)
 * - split-message-based-on-limit (Hard)
 */

/**
 * Approach: Greedy + Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `words`, `m` = length of the longest string in `words`
 *
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
        const lines = [];
        let sum = 0;
        let sumNoSpace = 0;

        for (const w of words) {
                const len = w.length;
                const newSum = sum + len + 1;

                if (sum && newSum <= maxWidth) {
                        sum = newSum;
                        sumNoSpace += len;
                        const line = lines.at(-1);
                        line[0] = sumNoSpace;
                        line.push(w);
                } else {
                        sum = len;
                        sumNoSpace = len;
                        lines.push([sum, w]);
                }
        }

        const res = new Array(lines.length);

        for (let i = 0; i < lines.length; i++) {
                const line = lines[i];

                if (i === lines.length - 1) {
                        res[i] = line.slice(1).join(' ').padEnd(maxWidth, ' ');
                        break;
                }

                const spacesRequired = maxWidth - line[0];
                const wordsRemaining = line.length - 2;

                if (!wordsRemaining) {
                        res[i] = `${line[1]}${' '.repeat(spacesRequired)}`;
                        continue;
                }

                const spacesEven = Math.floor(spacesRequired / wordsRemaining);
                const spacesUsed = wordsRemaining * spacesEven;
                let spacesExtra = spacesRequired - spacesUsed;
                let str = line[1];

                for (let j = 2; j < line.length; j++) {
                        str += `${' '.repeat(spacesEven + (spacesExtra > 0 ? 1 : 0))}${line[j]}`;
                        spacesExtra--;
                }

                res[i] = str;
        }

        return res;
};

export { fullJustify };
