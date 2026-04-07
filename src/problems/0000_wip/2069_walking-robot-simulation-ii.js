/**
 * 2069. Walking Robot Simulation II
 *
 * Link: https://leetcode.com/problems/walking-robot-simulation-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Design (topic_25)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 50,012
 * - Total Submissions: 133,618
 * - Acceptance Rate: 37.4%
 *
 * Similar Problems:
 * - walking-robot-simulation (Medium)
 */

/**
 * Approach: Math + Simulation [TLE]
 */
class Robot {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} width
         * @param {number} height
         */
        constructor(width, height) {
                this.dirs = [
                        [1, 0], // e
                        [0, 1], // n
                        [-1, 0], // w
                        [0, -1], // s
                ];

                this.dirNames = ['East', 'North', 'West', 'South'];
                this.width = width;
                this.height = height;
                this.dir = 0;
                this.x = 0;
                this.y = 0;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} num
         * @return {void}
         */
        step(num) {
                const dir = this.dirs[this.dir];
                const dist =
                        (Math.abs(num) % (2 * (this.width + this.height) - 4)) *
                        Math.sign(num);
                let xRem = dir[0] * dist;
                let yRem = dir[1] * dist;

                while (xRem || yRem) {
                        const nx = this.x + xRem;
                        const ny = this.y + yRem;

                        if (xRem && nx < this.width && nx > -1) {
                                this.x = nx;
                                xRem = 0;
                        }

                        if (yRem && ny < this.height && ny > -1) {
                                this.y = ny;
                                yRem = 0;
                        }

                        if (xRem && nx >= this.width) {
                                this.x = this.width - 1;
                                this.dir = 1;
                                const rem = nx - this.x;
                                yRem = this.dirs[this.dir][1] * rem;
                                xRem = 0;
                        }

                        if (xRem && nx < 0) {
                                this.x = 0;
                                this.dir = 3;
                                const rem = -nx;
                                yRem = this.dirs[this.dir][1] * rem;
                                xRem = 0;
                        }

                        if (yRem && ny >= this.height) {
                                this.y = this.height - 1;
                                this.dir = 2;
                                const rem = ny - this.y;
                                xRem = this.dirs[this.dir][0] * rem;
                                yRem = 0;
                        }

                        if (yRem && ny < -1) {
                                this.y = 0;
                                this.dir = 0;
                                const rem = -ny;
                                xRem = this.dirs[this.dir][0] * rem;
                                yRem = 0;
                        }
                }
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number[]}
         */
        getPos() {
                return [this.x, this.y];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {string}
         */
        getDir() {
                return this.dirNames[this.dir];
        }
}

export { Robot };
