/**
 * 1871. Jump Game VII
 *
 * Link: https://leetcode.com/problems/jump-game-vii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 68,264
 * - Total Submissions: 256,769
 * - Acceptance Rate: 26.6%
 *
 * Similar Problems:
 * - count-vowel-strings-in-ranges (Medium)
 * - jump-game (Medium)
 * - jump-game-ii (Medium)
 * - jump-game-iii (Medium)
 * - jump-game-vi (Medium)
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 * - jump-game-iv (Hard)
 * - jump-game-v (Hard)
 */

/**
 * Approach: Dynamic Programming + Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = (s, minJump, maxJump) => {
        const n = s.length;
        const dp = new Uint8Array(n);
        dp[0] = 1;
        let cnt = 0;

        for (let i = 1; i < n; i++) {
                cnt = cnt + (dp[i - minJump] ?? 0) - (dp[i - maxJump - 1] ?? 0);
                dp[i] = cnt && s[i] === '0';
        }

        return Boolean(dp[n - 1]);
};

/**
 * Approach: BFS + Monotonic Queue
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach1 = (s, minJump, maxJump) => {
        const n = s.length;
        const q = [0];
        let maxR = -1;

        for (let qi = 0; qi < q.length; qi++) {
                const i = q[qi];

                if (i === n - 1) {
                        return true;
                }

                const l = Math.max(i + minJump, maxR + 1);
                const r = Math.min(i + maxJump, n);
                maxR = r;

                for (let j = l; j <= r; j++) {
                        if (s[j] ^ 0) {
                                continue;
                        }

                        q.push(j);
                }
        }

        return false;
};

export { canReach, canReach1 };
