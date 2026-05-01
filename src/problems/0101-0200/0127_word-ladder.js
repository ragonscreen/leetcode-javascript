/**
 * 0127. Word Ladder
 *
 * Link: https://leetcode.com/problems/word-ladder/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 1,617,143
 * - Total Submissions: 3,560,852
 * - Acceptance Rate: 45.4%
 *
 * Similar Problems:
 * - minimum-genetic-mutation (Medium)
 * - words-within-two-edits-of-dictionary (Medium)
 * - word-ladder-ii (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m^2)
 * Space Complexity: O(n * m)
 * `n` = length of `wordList`, `m` = length of `beginWord`
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
        wordList.push(beginWord);
        const n = wordList.length;
        const graph = new Map();
        let foundEnd = false;

        for (let i = 0; i < n; i++) {
                const w = wordList[i];

                if (w === endWord) {
                        foundEnd = true;
                }

                for (let j = 0; j < w.length; j++) {
                        const key = `${w.slice(0, j)}-${w.slice(j + 1)}`;

                        // track indices instead of the words themselves
                        if (graph.has(key)) {
                                graph.get(key).push(i);
                        } else {
                                graph.set(key, [i]);
                        }

                        if (graph.has(i)) {
                                graph.get(i).push(key);
                        } else {
                                graph.set(i, [key]);
                        }
                }
        }

        if (!foundEnd) {
                return 0;
        }

        const q = new Queue([n - 1]);
        const visited = new Uint8Array(n);
        visited[n - 1] = 1;
        let res = 1;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const wordIdx = q.dequeue();

                        if (wordList[wordIdx] === endWord) {
                                return res;
                        }

                        for (const key of graph.get(wordIdx)) {
                                for (const idx of graph.get(key)) {
                                        if (visited[idx]) {
                                                continue;
                                        }

                                        q.enqueue(idx);
                                        visited[idx] = 1;
                                }
                        }
                }

                res++;
        }

        return 0;
};

/**
 * Approach: BFS
 * Time Complexity: O(n * m^2)
 * Space Complexity: O(n * m)
 * `n` = length of `wordList`, `m` = length of `beginWord`
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength1 = (beginWord, endWord, wordList) => {
        wordList.push(beginWord);
        const graph = new Map();
        let foundEnd = false;

        for (const w of wordList) {
                if (w === endWord) {
                        foundEnd = true;
                }

                for (let j = 0; j < w.length; j++) {
                        const key = `${w.slice(0, j)}-${w.slice(j + 1)}`;

                        if (graph.has(key)) {
                                graph.get(key).push(w);
                        } else {
                                graph.set(key, [w]);
                        }

                        if (graph.has(w)) {
                                graph.get(w).push(key);
                        } else {
                                graph.set(w, [key]);
                        }
                }
        }

        if (!foundEnd) {
                return 0;
        }

        const q = new Queue([beginWord]);
        const visited = new Set();
        visited.add(beginWord);
        let res = 1;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const word = q.dequeue();

                        if (word === endWord) {
                                return res;
                        }

                        for (const key of graph.get(word)) {
                                for (const w of graph.get(key)) {
                                        if (visited.has(w)) {
                                                continue;
                                        }

                                        q.enqueue(w);
                                        visited.add(w);
                                }
                        }
                }

                res++;
        }

        return 0;
};

/**
 * Approach: BFS
 * Time Complexity: O(n * m^2 * 26) = O(n * m)
 * Space Complexity: O(n * m * 26) = O(n * m)
 * `n` = length of `wordList`, `m` = length of `beginWord`
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength2 = (beginWord, endWord, wordList) => {
        const abc = 'qwertyuiopasdfghjklzxcvbnm';

        const getNext = (w) => {
                const res = [];

                for (let j = 0; j < w.length; j++) {
                        for (const c of abc) {
                                if (c === w[j]) {
                                        continue;
                                }

                                const key = `${w.slice(0, j)}${c}${w.slice(j + 1)}`;
                                res.push(key);
                        }
                }

                return res;
        };

        const set = new Set(wordList);
        set.add(beginWord);
        const q = new Queue([beginWord]);
        const visited = new Set([beginWord]);
        let res = 1;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const word = q.dequeue();

                        if (word === endWord) {
                                return res;
                        }

                        const next = getNext(word);

                        for (const w of next) {
                                if (!visited.has(w) && set.has(w)) {
                                        visited.add(w);
                                        q.enqueue(w);
                                }
                        }
                }

                res++;
        }

        return 0;
};

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m^2 + n * m * log (n * m)) = O(n * m^2)
 * Space Complexity: O(n * m)
 * `n` = length of `wordList`, `m` = length of `beginWord`
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength3 = (beginWord, endWord, wordList) => {
        wordList.push(beginWord);
        const graph = new Map();
        const dist = new Map();
        let foundEnd = false;

        for (const w of wordList) {
                if (w === endWord) {
                        foundEnd = true;
                }

                dist.set(w, 1e12);

                for (let j = 0; j < w.length; j++) {
                        const key = `${w.slice(0, j)}-${w.slice(j + 1)}`;

                        if (graph.has(key)) {
                                graph.get(key).push(w);
                        } else {
                                graph.set(key, [w]);
                        }

                        if (graph.has(w)) {
                                graph.get(w).push(key);
                        } else {
                                graph.set(w, [key]);
                        }
                }
        }

        if (!foundEnd) {
                return 0;
        }

        const minq = new MinPriorityQueue((e) => e[0], [[1, beginWord]]);
        dist.set(beginWord, 1);

        while (minq.size()) {
                const [cost, word] = minq.dequeue();

                if (dist.get(word) < cost) {
                        continue;
                }

                if (word === endWord) {
                        return cost;
                }

                const keys = graph.get(word);

                for (const key of keys) {
                        const nextWords = graph.get(key);

                        for (const w of nextWords) {
                                const newCost = cost + 1;

                                if (dist.get(w) < newCost) {
                                        continue;
                                }

                                minq.enqueue([newCost, w]);
                                dist.set(w, newCost);
                        }
                }
        }

        return 0;
};

export { ladderLength, ladderLength1, ladderLength2, ladderLength3 };
