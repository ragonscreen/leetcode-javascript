/**
 * 0043. Multiply Strings
 * Link: https://leetcode.com/problems/multiply-strings/
 * Difficulty: Medium
 * Date: 2026-02-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Math + Iteration
 * Time Complexity: O(log n * log m)
 * Space Complexity: O(log (n * m))
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
        let max;
        let min;

        if (num1.length > num2.length) {
                max = num1;
                min = num2;
        } else {
                min = num1;
                max = num2;
        }

        const products = [];

        for (let i = max.length - 1; i >= 0; i--) {
                const muls = new Array(max.length - i - 1).fill(0);
                let carry = 0;

                for (let j = min.length - 1; j >= 0; j--) {
                        const mul = max[i] * min[j] + carry;
                        const digit = mul % 10;
                        carry = Math.floor(mul / 10);
                        muls.push(digit);
                }

                if (carry) {
                        muls.push(carry);
                }

                products.push(muls);
        }

        const res = [];
        let carry = 0;

        for (let i = 0; i < products.at(-1).length; i++) {
                let sum = carry;

                for (const product of products) {
                        sum += product[i] || 0;
                }

                const digit = sum % 10;
                carry = Math.floor(sum / 10);
                res.push(digit);
        }

        if (carry) {
                res.push(carry);
        }

        while (res.length > 1 && res.at(-1) === 0) {
                res.pop();
        }

        return res.reverse().join('');
};

export { multiply };
