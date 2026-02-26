/**
 * 0202. Happy Number
 * Link: https://leetcode.com/problems/happy-number/
 * Difficulty: Easy
 * Date: 2026-02-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Fast and Slow Pointers (Optimal)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
        let slow = getVal(n);
        let fast = getVal(getVal(n));

        while (slow !== fast || fast === 1) {
                if (fast === 1) {
                        return true;
                }

                slow = getVal(slow);
                fast = getVal(getVal(fast));
        }

        return false;
};

/**
 * Implementation: Hash Set
 * Time Complexity: O(log n)
 * Space Complexity: O(k)
 * `k` = number of unique numbers encountered
 *
 * @param {number} n
 * @return {boolean}
 */
const isHappy1 = (n) => {
        const set = new Set();
        let v = n;

        while (v !== 1) {
                if (set.has(v)) {
                        return false;
                }

                set.add(v);
                v = getVal(v);
        }

        return true;
};

const getVal = (num) => {
        let n = num;
        let res = 0;

        while (n > 0) {
                res += (n % 10) ** 2;
                n = Math.floor(n / 10);
        }

        return res;
};

export { isHappy, isHappy1 };
