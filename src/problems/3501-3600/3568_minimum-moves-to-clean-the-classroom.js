/**
 * 3568. Minimum Moves to Clean the Classroom
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-clean-the-classroom/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Bit Manipulation (topic_19)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Weekly Contest 452 (contest_weekly-contest-452)
 *
 * Stats:
 * - Total Accepted: 34,203
 * - Total Submissions: 71,441
 * - Acceptance Rate: 47.9%
 */

/**
 * Approach: Bit Manipulation + BFS [II]
 * Time Complexity: O(n * m * e * 2^L)
 * Space Complexity: O(n * m * 2^L)
 * `n` = `classroom.length`, `m` = `classroom[0].length`,
 * `e` = `energy`, `L` = count of litter cells
 *
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
const minMoves = (classroom, energy) => {
        const n = classroom.length;
        const m = classroom[0].length;
        const sz = n * m;

        const ppos = (y, x) => m * y + x;
        const upos = (pos) => [0 | (pos / m), pos % m];

        const pidx = (mask, pos) => mask * sz + pos;

        const pstate = (mask, pos, hp) => (mask << 15) | (pos << 6) | hp;
        const ustate = (st) => {
                const hp = st & 0x3f;
                const pos = (st >> 6) & 0x1_ff;
                const mask = (st >> 15) & 0xf_ff;

                return [mask, pos, hp];
        };

        const grid = new Int8Array(sz).fill(-1);
        let cntKeys = 0;
        let totMask = 0;
        let pos0 = -1;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = classroom[y][x];
                        const pos = ppos(y, x);

                        switch (c) {
                                case 'S':
                                        pos0 = pos;
                                        break;
                                case 'X':
                                        grid[pos] = -2;
                                        break;
                                case 'R':
                                        grid[pos] = -3;
                                        break;
                                case 'L':
                                        totMask |= 1 << cntKeys;
                                        grid[pos] = cntKeys++;
                                        break;
                                default:
                                        break;
                        }
                }
        }

        if (cntKeys === 0) {
                return 0;
        }

        const d = [-1, 0, 1, 0, -1];
        const best = new Uint8Array((1 << cntKeys) * sz);
        best[pidx(0, pos0)] = energy;
        let q = [pstate(0, pos0, energy)];
        let res = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const [mask, pos, hp] = ustate(q[qi]);
                        const [y, x] = upos(pos);

                        for (let di = 0; di < 4; di++) {
                                const ny = y + d[di];
                                const nx = x + d[di + 1];

                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                        continue;
                                }

                                const npos = ppos(ny, nx);
                                const c = grid[npos];
                                const nmask = c >= 0 ? mask | (1 << c) : mask;

                                if (nmask === totMask) {
                                        return res;
                                }

                                const nhp = c === -3 ? energy : hp - 1;

                                if (c === -2 || nhp === 0) {
                                        continue;
                                }

                                const nidx = pidx(nmask, npos);

                                if (best[nidx] >= nhp) {
                                        continue;
                                }

                                best[nidx] = nhp;
                                const nstate = pstate(nmask, npos, nhp);
                                q2.push(nstate);
                        }
                }

                q = q2;
                res++;
        }

        return -1;
};

/**
 * Approach: Bit Manipulation + BFS [I]
 * Time Complexity: O(n * m * e * 2^L)
 * Space Complexity: O(n * m * e * 2^L)
 * `n` = `classroom.length`, `m` = `classroom[0].length`,
 * `e` = `energy`, `L` = count of litter cells
 *
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
const minMoves1 = (classroom, energy) => {
        const n = classroom.length;
        const m = classroom[0].length;
        const grid = Array.from({ length: n }, () => new Int8Array(m));
        let totKeys = 0;
        let y0 = -1;
        let x0 = -1;

        for (let y = 0, keyIdx = 2; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = classroom[y][x];

                        if (c === 'S') {
                                y0 = y;
                                x0 = x;
                        } else if (c === 'X') {
                                grid[y][x] = -1;
                        } else if (c === 'R') {
                                grid[y][x] = 1;
                        } else if (c === 'L') {
                                totKeys |= 1 << keyIdx;
                                grid[y][x] = keyIdx++;
                        }
                }
        }

        if (totKeys === 0) {
                return 0;
        }

        const d = [-1, 0, 1, 0, -1];
        // STATE: [keys, y, x, hp]
        const pack = (k, y, x, h) => (k << 16) | (y << 11) | (x << 6) | h;
        const unpack = (st) => {
                const h = st & 0x3f;
                const x = (st >> 6) & 0x1f;
                const y = (st >> 11) & 0x1f;
                const k = (st >> 16) & 0xf_ff;

                return [k, y, x, h];
        };
        const cur = pack(0, y0, x0, energy);
        const vis = new Set([cur]);
        let q = [cur];
        let res = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const [k, y, x, hp] = unpack(q[qi]);

                        for (let di = 0; di < 4; di++) {
                                const ny = y + d[di];
                                const nx = x + d[di + 1];

                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                        continue;
                                }

                                const c = grid[ny][nx];
                                const nk = c > 1 ? k | (1 << c) : k;

                                if (nk === totKeys) {
                                        return res;
                                }

                                const nhp = c === 1 ? energy : hp - 1;

                                if (c === -1 || nhp === 0) {
                                        continue;
                                }

                                const ns = pack(nk, ny, nx, nhp);

                                if (!vis.has(ns)) {
                                        vis.add(ns);
                                        q2.push(ns);
                                }
                        }
                }

                q = q2;
                res++;
        }

        return -1;
};

export { minMoves, minMoves1 };
