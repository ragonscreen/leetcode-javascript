/**
 * 1914. Cyclically Rotating a Grid
 *
 * Link: https://leetcode.com/problems/cyclically-rotating-a-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 81,330
 * - Total Submissions: 109,729
 * - Acceptance Rate: 74.1%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const rotateGrid = (grid, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const layers = Math.min(n, m) / 2;

        for (let i = 0; i < layers; i++) {
                let t = i;
                let b = n - i - 1;
                let l = i;
                let r = m - i - 1;
                const len = 2 * (r - l + b - t);
                const rot = k % len;

                if (rot === 0) {
                        continue;
                }

                const nums = new Array(len);
                let j = 0;

                for (let x = l; x <= r; x++) {
                        nums[j++] = grid[t][x];
                }

                for (let y = t + 1; y <= b; y++) {
                        nums[j++] = grid[y][r];
                }

                for (let x = r - 1; x >= l; x--) {
                        nums[j++] = grid[b][x];
                }

                for (let y = b - 1; y >= t + 1; y--) {
                        nums[j++] = grid[y][l];
                }

                const rots = new Uint16Array(len);
                const jj = (len - rot) % len; // calculate mod only once per layer
                let p = 0;

                for (let q = jj; q < len; q++) {
                        rots[q] = nums[p++];
                }

                for (let q = 0; q < jj; q++) {
                        rots[q] = nums[p++];
                }

                t = i;
                b = n - i - 1;
                l = i;
                r = m - i - 1;
                j = 0;

                for (let x = l; x <= r; x++) {
                        grid[t][x] = rots[j++];
                }

                for (let y = t + 1; y <= b; y++) {
                        grid[y][r] = rots[j++];
                }

                for (let x = r - 1; x >= l; x--) {
                        grid[b][x] = rots[j++];
                }

                for (let y = b - 1; y >= t + 1; y--) {
                        grid[y][l] = rots[j++];
                }
        }

        return grid;
};

/**
 * Approach: Cycle Sort
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const rotateGrid1 = (grid, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const layers = [];
        let layer = 0;
        const d = [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0],
        ];
        let t = 0;
        let b = n - 1;
        let l = 0;
        let r = m - 1;

        // unwrap layers
        while (l < r && t < b) {
                let dir = 0;
                let y = t;
                let x = l;
                const cnt = 2 * (r - l + b - t);
                layers[layer] = new Array(cnt);
                layers[layer][0] = grid[y][x];

                for (let i = 1; i < cnt; i++) {
                        const [dy, dx] = d[dir];
                        const ny = y + dy;
                        const nx = x + dx;
                        const val = grid[ny][nx];
                        layers[layer][i] = val;
                        y = ny;
                        x = nx;

                        // moving in y direction and hit y wall OR
                        // moving in x direction and hit x wall
                        if (
                                (dir % 2 === 1 && (y === t || y === b)) ||
                                (dir % 2 === 0 && (x === r || x === l))
                        ) {
                                dir = (dir + 1) % 4;
                        }
                }

                l++;
                r--;
                t++;
                b--;
                layer++;
        }

        // cycle sort layers
        for (const cur of layers) {
                const len = cur.length;
                const rot = k % len;
                let swaps = 0;

                for (let i = 0; i < len; i++) {
                        let newIdx = (i + len - rot) % len;
                        let val = cur[i];

                        while (swaps < len) {
                                swaps++;
                                const tmp = cur[newIdx];
                                cur[newIdx] = val;

                                if (newIdx === i) {
                                        break;
                                }

                                newIdx = (newIdx + len - rot) % len;
                                val = tmp;
                        }
                }
        }

        layer = 0;
        t = 0;
        b = n - 1;
        l = 0;
        r = m - 1;

        // refill sorted grid
        while (l < r && t < b) {
                let dir = 0;
                let y = t;
                let x = l;
                const cnt = 2 * (r - l + b - t);
                grid[y][x] = layers[layer][0];

                for (let i = 1; i < cnt; i++) {
                        const [dy, dx] = d[dir];
                        const ny = y + dy;
                        const nx = x + dx;
                        grid[ny][nx] = layers[layer][i];
                        y = ny;
                        x = nx;

                        if (
                                (dir % 2 === 1 && (y === t || y === b)) ||
                                (dir % 2 === 0 && (x === r || x === l))
                        ) {
                                dir = (dir + 1) % 4;
                        }
                }

                l++;
                r--;
                t++;
                b--;
                layer++;
        }

        return grid;
};

export { rotateGrid, rotateGrid1 };
