import { describe, expect, test } from 'bun:test';
import { canVisitAllRooms } from '../../../src/problems/0801-0900/0841_keys-and-rooms.js';

const testcases = [
        { rooms: [[1], [2], [3], []], expected: true },
        { rooms: [[1, 3], [3, 0, 1], [2], [0]], expected: false },
];

describe('canVisitAllRooms', () => {
        test.each(
                structuredClone(testcases),
        )('canVisitAllRooms($rooms) -> $expected', ({ rooms, expected }) => {
                expect(canVisitAllRooms(rooms)).toStrictEqual(expected);
        });
});
