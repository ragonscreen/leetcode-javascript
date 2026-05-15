import { describe, expect, test } from 'bun:test';
import { detectCycle } from '../../../src/problems/0101-0200/0142_linked-list-cycle-ii.js';
import { arrayToList, createCycle } from '../../utils/linked-list.js';

const testcases = [
        {
                head: [3, 2, 0, -4],
                pos: 1,
                expected: 'tail connects to node index 1',
        },
        { head: [1, 2], pos: 0, expected: 'tail connects to node index 0' },
        { head: [1], pos: -1, expected: 'no cycle' },
];

describe('detectCycle', () => {
        test.each(
                structuredClone(testcases),
        )('detectCycle($head, $pos) -> $expected', ({ head, pos }) => {
                const list = createCycle(arrayToList(head), pos);
                const recieved = detectCycle(list);

                if (pos === -1) {
                        expect(recieved).toStrictEqual(null);
                } else {
                        let slow = list;
                        let fast = list;

                        while (fast?.next) {
                                slow = slow.next;
                                fast = fast.next.next;

                                if (fast === slow) {
                                        break;
                                }
                        }

                        let find = list;

                        while (slow !== find) {
                                slow = slow.next;
                                find = find.next;
                        }

                        expect(recieved).toStrictEqual(find);
                }
        });
});
