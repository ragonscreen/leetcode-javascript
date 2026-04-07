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
 * Approach: Math
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
                        [1, 0, 'East'],
                        [0, 1, 'North'],
                        [-1, 0, 'West'],
                        [0, -1, 'South'],
                ];

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
                let dist = num % (2 * (this.width + this.height) - 4);

                if (dist === 0 && this.x === 0 && this.y === 0) {
                        this.dir = 3;
                }

                while (dist) {
                        const dir = this.dirs[this.dir];
                        const nx = this.x + dir[0] * dist;
                        const ny = this.y + dir[1] * dist;

                        if (this.dir === 0 || this.dir === 2) {
                                if (nx >= 0 && nx < this.width) {
                                        this.x = nx;
                                        dist = 0;
                                }

                                if (nx >= this.width) {
                                        this.x = this.width - 1;
                                        dist = nx - this.x;
                                        this.dir = 1;
                                }

                                if (nx < 0) {
                                        this.x = 0;
                                        dist = -nx;
                                        this.dir = 3;
                                }
                        } else {
                                if (ny >= 0 && ny < this.height) {
                                        this.y = ny;
                                        dist = 0;
                                }

                                if (ny >= this.height) {
                                        this.y = this.height - 1;
                                        dist = ny - this.y;
                                        this.dir = 2;
                                }

                                if (ny < 0) {
                                        this.y = 0;
                                        dist = -ny;
                                        this.dir = 0;
                                }
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
                return this.dirs[this.dir][2];
        }
}

export { Robot };
