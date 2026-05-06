/**
 * 1861. Rotating the Box
 *
 * Link: https://leetcode.com/problems/rotating-the-box/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 195,792
 * - Total Submissions: 243,521
 * - Acceptance Rate: 80.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = length of `boxGrid`, `m` = length of `boxGrid[i]`
 *
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
const rotateTheBox = (boxGrid) => {
        const n = boxGrid.length;
        const m = boxGrid[0].length;
        const res = Array.from({ length: m }, () => new Array(n).fill('.'));
        const map = new Map();

        for (let y = 0; y < n; y++) {
                const cnts = [];
                let cnt = 0;

                for (let x = 0; x < m; x++) {
                        const c = boxGrid[y][x];

                        if (c === '#') {
                                cnt++;
                        }

                        if (c === '*') {
                                res[x][n - y - 1] = '*';
                                cnts.push(cnt);
                                cnt = 0;
                        }
                }

                cnts.push(cnt);
                map.set(n - y - 1, cnts);
        }

        for (let x = 0; x < n; x++) {
                const idxs = map.get(x);
                let ptr = idxs.length - 1;

                for (let y = m - 1; y > -1; y--) {
                        const c = res[y][x];

                        if (c === '*') {
                                ptr--;
                        } else {
                                if (idxs[ptr]) {
                                        res[y][x] = '#';
                                        idxs[ptr]--;
                                }
                        }
                }
        }

        return res;
};

export { rotateTheBox };
