/**
 * 0218. The Skyline Problem
 *
 * Link: https://leetcode.com/problems/the-skyline-problem/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Divide and Conquer (topic_12)
 * - Binary Indexed Tree (topic_28)
 * - Segment Tree (topic_29)
 * - Sweep Line (topic_56119)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Ordered Set (topic_61070)
 *
 * Stats:
 * - Total Accepted: 352,470
 * - Total Submissions: 778,360
 * - Acceptance Rate: 45.3%
 *
 * Similar Problems:
 * - shifting-letters-ii (Medium)
 * - falling-squares (Hard)
 */
/** biome-ignore-all lint/suspicious/noEmptyBlockStatements: <explanation> */
/** biome-ignore-all lint/complexity/noUselessContinue: <explanation> */
/** biome-ignore-all lint/style/useCollapsedIf: <explanation> */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = (buildings) => {
        const minq = new MinPriorityQueue((e) => e[0], buildings);
        const res = [];
        let prev = minq.dequeue();

        while (minq.size()) {
                const curr = minq.dequeue();
                const [cl, cr, ch] = curr;
                const [pl, pr, ph] = prev;

                // 4. start beyond
                if (cl > pr) {
                        res.push([pr, 0]);
                        prev = curr;
                        continue;
                }

                // 3. start at end
                if (cl === pr) {
                        res.push([pl, ph]);

                        // a. taller + c. shorter (b. inapplicable)
                        if (ch !== ph) {
                                res.push([pr, ch]);
                        }

                        prev = curr;
                        continue;
                }

                // 2. start at middle
                if (cl !== pl && cl < pr) {
                        res.push(ph);

                        // a. taller
                        if (ch > ph) {
                                res.push(ch);

                                // iii. end middle
                                if (cr < pr) {
                                        res.push(ph);
                                        continue;
                                }

                                // i. end beyond + ii. end end
                                prev = curr;
                                continue;
                        }

                        // b. same
                        if (ch === ph) {
                                // iii. end middle + ii. end end
                                if (cr <= pr) {
                                        continue;
                                }

                                // i. end beyond
                                prev = curr;
                                continue;
                        }

                        // c. shorter
                        if (ch < ph) {
                                // iii. end middle + ii. end end
                                if (cr <= pr) {
                                        continue;
                                }

                                // i. end beyond
                                res.push(ch);
                                prev = curr;
                                continue;
                        }
                }

                // 1. start at start
                if (cl === pl) {
                        // a. taller
                        if (ch > ph) {
                                res.push(ch);

                                // iii. end middle
                                if (cr < pr) {
                                        res.push(ph);
                                        continue;
                                }

                                // i. end beyond + ii. end end
                                prev = curr;
                                continue;
                        }

                        // b. same
                        if (ch === ph) {
                                // iii. end middle + ii. end end
                                if (cr <= pr) {
                                        continue;
                                }

                                // i. end beyond
                                prev = curr;
                                continue;
                        }

                        // c. shorter
                        if (ch < ph) {
                                // iii. end middle + ii. end end
                                if (cr <= pr) {
                                        continue;
                                }

                                // i. end beyond
                                res.push(ch);
                                prev = curr;
                                continue;
                        }
                }
        }

        console.log(res);

        return 0;

        /*

        1. start at start
                x a. taller
                        x i.   end beyond
                        x ii.  end end
                        x iii. end middle
                b. same height
                        i.   end beyond
                        ii.  end end
                        iii. end middle
                c. shorter
                        i.   end beyond
                        ii.  end end
                        iii. end middle
        x 2. start at middle
                x a. taller
                        x i.   end beyond
                        x ii.  end end
                        x iii. end middle
                x b. same height
                        x i.   end beyond
                        x ii.  end end
                        x iii. end middle
                x c. shorter
                        x i.   end beyond
                        x ii.  end end
                        x iii. end middle
        x 3. start at end
                xa. taller
                        i. end beyond
                xb. same height
                        i. end beyond
                xc. shorter
                        i. end beyond
        x 4. start beyond
                xa. move on to next loop

        */
};

export { getSkyline };
