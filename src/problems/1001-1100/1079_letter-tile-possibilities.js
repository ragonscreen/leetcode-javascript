/**
 * 1079. Letter Tile Possibilities
 *
 * Link: https://leetcode.com/problems/letter-tile-possibilities/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Backtracking (topic_14)
 * - Counting (topic_61062)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 140 (contest_weekly-contest-140)
 *
 * Stats:
 * - Total Accepted: 258,387
 * - Total Submissions: 309,315
 * - Acceptance Rate: 83.5%
 */

/**
 * Approach: Backtracking
 * Time Complexity: O(n!)
 * Space Complexity: O(n)
 * `n` = `tiles.length`
 *
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = (tiles) => {
        const n = tiles.length;
        const map = new Uint8Array(26);

        for (let i = 0; i < n; i++) {
                map[tiles[i].charCodeAt() - 65]++;
        }

        const bt = (rem) => {
                let cnt = 0;

                for (let i = 0; i < 26; i++) {
                        if (rem[i] === 0) {
                                continue;
                        }

                        cnt++;
                        rem[i]--;
                        cnt += bt(rem);
                        rem[i]++;
                }

                return cnt;
        };

        return bt(map);
};

export { numTilePossibilities };
