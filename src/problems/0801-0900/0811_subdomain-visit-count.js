/**
 * 0811. Subdomain Visit Count
 *
 * Link: https://leetcode.com/problems/subdomain-visit-count/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 263,332
 * - Total Submissions: 341,075
 * - Acceptance Rate: 77.2%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `cpdomains`, `m` = length of domain in `cpdomains`
 *
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = (cpdomains) => {
        const map = new Map();

        for (const c of cpdomains) {
                let [cnt, s] = c.split(' ');
                cnt = Number(cnt);
                map.set(s, (map.get(s) || 0) + cnt);
                const m = s.length;

                for (let i = m - 1; i > -1; i--) {
                        if (s[i] === '.') {
                                const str = s.slice(i + 1, m);
                                map.set(str, (map.get(str) || 0) + cnt);
                        }
                }
        }

        const res = new Array(map.size);
        let i = 0;

        for (const [k, v] of map) {
                res[i++] = `${v} ${k}`;
        }

        return res;
};

export { subdomainVisits };
