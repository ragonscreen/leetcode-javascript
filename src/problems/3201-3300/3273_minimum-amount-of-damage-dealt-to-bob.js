/**
 * 3273. Minimum Amount of Damage Dealt to Bob
 *
 * Link: https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 14,433
 * - Total Submissions: 36,384
 * - Acceptance Rate: 39.7%
 *
 * Similar Problems:
 * - minimum-penalty-for-a-shop (Medium)
 * - minimum-time-to-complete-trips (Medium)
 */

/**
 * Approach: Greedy (Weighted Shortest Job First)
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number} power
 * @param {number[]} damage
 * @param {number[]} health
 * @return {number}
 */
const minDamage = (power, damage, health) => {
        const n = damage.length;
        const enemies = new Array(n);
        let totalDpsTaken = 0;

        for (let i = 0; i < n; i++) {
                const dmg = damage[i];
                const ttk = Math.ceil(health[i] / power);
                enemies[i] = { dmg, ttk };
                totalDpsTaken += dmg;
        }

        enemies.sort((a, b) => {
                // let DA = damage per unit time from A, DB = damage per unit time from B
                //     TA = time to kill A, TB = time to kill B
                //     ka = damage taken if killing a is prioritised
                //     kb = damage taken if killing b is prioritised
                //
                // we find that:
                // ka = DA * TA + DB * (TA + TB)
                // kb = DB * TB + DA * (TA + TB)
                //
                // assume ka < kb
                //    DA * TA + DB * (TA + TB) < DB * TB + DA * (TA + TB)
                // => DA * TA + DB * TA + DB * TB < DB * TB + DA * TA + DA * TB
                //
                // subtracting DA * TA and DB * TB from both sides, we have
                // => DB * TA < DA * TB
                //
                // dividing both sides by TA * TB, we have
                // => DB / TB < DA / TA
                //
                // therefore, if damage taken if killing A is prioritised is lesser than
                // damage taken if killing B is prioritised, DB / TB < DA / TA
                //
                // we want to minimise damage taken, and as such, we return accordingly
                //
                // the following is equivalent to `b.dmg / b.ttk < a.dmg / a.ttk ? -1 : 1`
                // return b.dmg / b.ttk - a.dmg / a.ttk;
                //
                // for performance, we can substitute the division with multiplication
                // according to our penultimate result
                return b.dmg * a.ttk - a.dmg * b.ttk;
        });

        let res = 0;

        for (let i = 0; i < n; i++) {
                const enemy = enemies[i];
                res += totalDpsTaken * enemy.ttk;
                totalDpsTaken -= enemy.dmg;
        }

        return res;
};

export { minDamage };
