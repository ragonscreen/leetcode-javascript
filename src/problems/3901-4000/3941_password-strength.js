/**
 * 3941. Password Strength
 *
 * Link: https://leetcode.com/problems/password-strength/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Senior (position_senior)
 * - Weekly Contest 503 (contest_weekly-contest-503)
 *
 * Stats:
 * - Total Accepted: 40,867
 * - Total Submissions: 54,828
 * - Acceptance Rate: 74.5%
 */

/**
 * Approach: Bit Packing
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `password.length`
 *
 * @param {string} password
 * @return {number}
 */
const passwordStrength = (password) => {
        let nmask = 0;
        let umask = 0;
        let lmask = 0;
        let smask = 0;
        let res = 0;

        for (let i = 0; i < password.length; i++) {
                const v = password[i].charCodeAt();
                let bit = 0;

                if (v >= 48 && v <= 57) {
                        bit = 1 << (v - 48);

                        if ((nmask & bit) === 0) {
                                nmask |= bit;
                                res += 3;
                        }
                } else if (v >= 65 && v <= 90) {
                        bit = 1 << (v - 65);

                        if ((umask & bit) === 0) {
                                umask |= bit;
                                res += 2;
                        }
                } else if (v >= 97 && v <= 122) {
                        bit = 1 << (v - 97);

                        if ((lmask & bit) === 0) {
                                lmask |= bit;
                                res++;
                        }
                } else {
                        bit = 1 << (v - 33);

                        if ((smask & bit) === 0) {
                                smask |= bit;
                                res += 5;
                        }
                }
        }

        return res;
};

/**
 * Approach: Simulation [II]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `password.length`
 *
 * @param {string} password
 * @return {number}
 */
const passwordStrength1 = (password) => {
        const set = new Uint8Array(90);
        let res = 0;

        for (let i = 0; i < password.length; i++) {
                const v = password[i].charCodeAt();

                // ! = 33
                if (set[v - 33]) {
                        continue;
                }

                set[v - 33] = 1;

                if (v >= 48 && v <= 57) {
                        res += 3;
                } else if (v >= 65 && v <= 90) {
                        res += 2;
                } else if (v >= 97 && v <= 122) {
                        res++;
                } else {
                        res += 5;
                }
        }

        return res;
};

/**
 * Approach: Simulation [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `password.length`
 *
 * @param {string} password
 * @return {number}
 */
const passwordStrength2 = (password) => {
        const set = new Set(password);
        let res = 0;

        for (const char of set) {
                if (char >= '0' && char <= '9') {
                        res += 3;
                } else if (char >= 'A' && char <= 'Z') {
                        res += 2;
                } else if (char >= 'a' && char <= 'z') {
                        res++;
                } else {
                        res += 5;
                }
        }

        return res;
};

export { passwordStrength, passwordStrength1, passwordStrength2 };
