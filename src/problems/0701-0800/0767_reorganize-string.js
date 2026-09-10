/**
 * 767. Reorganize String
 *
 * Link: https://leetcode.com/problems/reorganize-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Counting (topic_61062)
 * - Staff (position_staff)
 * - Weekly Contest 68 (contest_weekly-contest-68)
 *
 * Stats:
 *
 * - Total Accepted: 636,155
 * - Total Submissions: 1,105,415
 * - Acceptance Rate: 57.5%
 *
 * Similar Problems:
 *
 * - longest-happy-string (Medium)
 * - task-scheduler (Medium)
 * - rearrange-string-k-distance-apart (Hard) (Premium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string}
 */
const reorganizeString = (s) => {
        const n = s.length;
        const map = new Uint16Array(26);

        for (let i = 0; i < n; i++) map[s.charCodeAt(i) - 97]++;

        let mxi = 0;

        for (let i = 1; i < 26; i++) if (map[i] > map[mxi]) mxi = i;

        if (map[mxi] > (n + 1) >> 1) return '';

        const res = new Array(n);
        let idx = 0;

        while (map[mxi]) {
                res[idx] = String.fromCharCode(mxi + 97);
                map[mxi]--;
                idx += 2;
        }

        for (let i = 0; i < 26; i++) {
                while (map[i]) {
                        if (idx >= n) idx = 1;
                        res[idx] = String.fromCharCode(i + 97);
                        map[i]--;
                        idx += 2;
                }
        }

        return res.join('');
};

export { reorganizeString };
