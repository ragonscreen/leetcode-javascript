/**
 * 1233. Remove Sub-Folders from the Filesystem
 *
 * Link: https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Depth-First Search (topic_21)
 * - Trie (topic_27)
 * - Senior (position_senior)
 * - Weekly Contest 159 (contest_weekly-contest-159)
 *
 * Stats:
 * - Total Accepted: 266,536
 * - Total Submissions: 339,137
 * - Acceptance Rate: 78.6%
 */

class TrieNode {
        constructor(isEnd = false) {
                this.children = {};
                this.isEnd = isEnd;
        }
}

/**
 * Approach: Sorting [I]
 * Time Complexity: O(n * l lg n)
 * Space Complexity: O(1) auxiliary, O(n * l) total
 * `n` = `folder.length`, `l` = `max(folder[i].length)`
 *
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = (folder) => {
        folder.sort();
        const n = folder.length;
        let cur = folder[0];
        const res = [cur];

        for (let i = 1; i < n; i++) {
                const str = folder[i];

                if (str.startsWith(cur) && str[cur.length] === '/') {
                        continue;
                }

                cur = str;
                res.push(cur);
        }

        return res;
};

/**
 * Approach: Sorting [II]
 * Time Complexity: O(n * l lg n)
 * Space Complexity: O(1) auxiliary, O(n * l) total
 * `n` = `folder.length`, `l` = `max(folder[i].length)`
 *
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders1 = (folder) => {
        const cmp = (s, t) => {
                const l = s.length;
                let p = 0;

                while (p < l && s[p] === t[p]) {
                        p++;
                }

                return p === l && t[p] === '/';
        };

        folder.sort();
        const n = folder.length;
        let cur = folder[0];
        const res = [cur];

        for (let i = 1; i < n; i++) {
                const str = folder[i];

                if (!cmp(cur, str)) {
                        cur = str;
                        res.push(str);
                }
        }

        return res;
};

/**
 * Approach: Trie
 * Time Complexity: O(n * l)
 * Space Complexity: O(n * l)
 * `n` = `folder.length`, `l` = `max(folder[i].length)`
 *
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders2 = (folder) => {
        const n = folder.length;
        const root = new TrieNode();

        for (let i = 0; i < n; i++) {
                const dirs = folder[i].split('/');
                let node = root;

                for (let j = 1; j < dirs.length; j++) {
                        const dir = dirs[j];
                        node.children[dir] ??= new TrieNode();
                        node = node.children[dir];
                }

                node.isEnd = true;
        }

        const res = [];

        for (let i = 0; i < n; i++) {
                const parent = folder[i];
                const dirs = parent.split('/');
                const m = dirs.length;
                let node = root;
                let valid = true;

                for (let j = 1; j < m; j++) {
                        node = node.children[dirs[j]];

                        if (node.isEnd && j !== m - 1) {
                                valid = false;
                                break;
                        }
                }

                if (valid) {
                        res.push(parent);
                }
        }

        return res;
};

export { removeSubfolders, removeSubfolders1, removeSubfolders2 };
