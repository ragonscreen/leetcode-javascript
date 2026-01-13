/**
 * 0853. Car Fleet
 * Link: https://leetcode.com/problems/car-fleet/
 * Difficulty: Medium
 * Date: 2026-01-12
 * Author: ragonscreen
 */

/**
 * Implementation: Bucket Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
        const cars = new Array(target).fill(null);

        for (let i = 0; i < position.length; i++) {
                const p = position[i];
                const time = (target - p) / speed[i];
                cars[p] = time;
        }

        let fleets = 0;
        let slowest = 0;

        for (let i = cars.length - 1; i >= 0; i--) {
                const car = cars[i];

                if (car && car > slowest) {
                        fleets++;
                        slowest = car;
                }
        }

        return fleets;
};

export default carFleet;
