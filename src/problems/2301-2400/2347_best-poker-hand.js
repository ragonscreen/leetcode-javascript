/**
 * 2347. Best Poker Hand
 *
 * Link: https://leetcode.com/problems/best-poker-hand/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 53,938
 * - Total Submissions: 87,445
 * - Acceptance Rate: 61.7%
 *
 * Similar Problems:
 * - categorize-box-according-to-criteria (Easy)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = (ranks, suits) => {
        const map = new Map();
        let maxRank = 0;
        let maxSuit = 0;

        for (let i = 0; i < ranks.length; i++) {
                const rank = ranks[i];
                const suit = suits[i];
                const valRank = (map.get(rank) || 0) + 1;
                const valSuit = (map.get(suit) || 0) + 1;
                map.set(rank, valRank);
                map.set(suit, valSuit);
                maxRank = Math.max(maxRank, valRank);
                maxSuit = Math.max(maxSuit, valSuit);
        }

        if (maxSuit === 5) {
                return 'Flush';
        }

        if (maxRank >= 3) {
                return 'Three of a Kind';
        }

        if (maxRank === 2) {
                return 'Pair';
        }

        return 'High Card';
};

export { bestHand };
