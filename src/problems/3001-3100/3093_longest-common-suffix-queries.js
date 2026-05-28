/**
 * 3093. Longest Common Suffix Queries
 *
 * Link: https://leetcode.com/problems/longest-common-suffix-queries/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Trie (topic_27)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 390 (contest_weekly-contest-390)
 *
 * Stats:
 * - Total Accepted: 32,398
 * - Total Submissions: 71,140
 * - Acceptance Rate: 45.5%
 *
 * Similar Problems:
 * - longest-common-prefix (Easy)
 * - find-the-length-of-the-longest-common-prefix (Medium)
 */

class TrieNode {
        constructor(idx = -1) {
                this.children = {};
                this.idx = idx;
        }
}

/**
 * Approach: Sorting + Trie
 * Time Complexity: O(n lg n + l + m)
 * Space Complexity: O(n + l) auxiliary, O(n + l + q) total
 * `n` = `wordsContainer.length`, `q` = `wordsQuery.length`
 * `l` = `sum(wordsContainer[i].length)`, `m` = `sum(wordsQuery[i].length)`
 *
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
const stringIndices = (wordsContainer, wordsQuery) => {
        const n = wordsContainer.length;
        const q = wordsQuery.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const str = wordsContainer[i];

                if (!map.has(str)) {
                        map.set(str, i);
                }
        }

        wordsContainer.sort((a, b) => {
                return a.length - b.length || map.get(a) - map.get(b);
        });

        const mni = map.get(wordsContainer[0]);
        const root = new TrieNode();

        for (let i = 0; i < n; i++) {
                const str = wordsContainer[i];
                const idx = map.get(str);

                if (idx === undefined) {
                        continue;
                }

                map.delete(str); // process each string only once
                let node = root;

                for (let j = str.length - 1; j > -1; j--) {
                        const char = str[j];
                        node.children[char] ??= new TrieNode(idx);
                        node = node.children[char];
                }
        }

        const res = new Uint32Array(q);

        for (let qi = 0; qi < q; qi++) {
                const str = wordsQuery[qi];
                let node = root;

                for (let j = str.length - 1; j > -1; j--) {
                        const char = str[j];

                        if (!node.children[char]) {
                                break;
                        }

                        node = node.children[char];
                }

                const idx = node.idx;
                res[qi] = idx < 0 ? mni : idx;
        }

        return res;
};

/**
 * Approach: Trie
 * Time Complexity: O(l + m)
 * Space Complexity: O(l)
 * `l` = `sum(wordsContainer[i].length)`, `m` = `sum(wordsQuery[i].length)`
 *
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
const stringIndices1 = (wordsContainer, wordsQuery) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const n = wordsContainer.length;
        const q = wordsQuery.length;
        const root = new TrieNode();
        let mni = 0;

        for (let i = 0; i < n; i++) {
                const str = wordsContainer[i];
                const len = str.length;
                let node = root;

                if (len < wordsContainer[mni].length) {
                        mni = i;
                }

                for (let j = str.length - 1; j > -1; j--) {
                        const char = str[j];

                        if (!node.children[char]) {
                                node.children[char] = new TrieNode();
                        }

                        node = node.children[char];
                        const cur = node.idx;
                        const curLen = wordsContainer[cur]?.length ?? INF;

                        if (len < curLen || (len === curLen && i < cur)) {
                                node.idx = i;
                        }
                }
        }

        const res = new Uint32Array(q);

        for (let qi = 0; qi < q; qi++) {
                const str = wordsQuery[qi];
                let node = root;
                let found = -1;

                for (let j = str.length - 1; j > -1; j--) {
                        const char = str[j];

                        if (!node.children[char]) {
                                break;
                        }

                        node = node.children[char];
                        found = node.idx;
                }

                res[qi] = found < 0 ? mni : found;
        }

        return res;
};

export { stringIndices, stringIndices1 };
