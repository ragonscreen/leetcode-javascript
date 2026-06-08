import { describe, expect, test } from 'bun:test';
import { numFriendRequests } from '../../../src/problems/0801-0900/0825_friends-of-appropriate-ages.js';

const testcases = [
        { ages: [16, 16], expected: 2 },
        { ages: [16, 17, 18], expected: 2 },
        { ages: [20, 30, 100, 110, 120], expected: 3 },
        { ages: [108, 115, 5, 24, 82], expected: 3 },
        { ages: [5, 10], expected: 0 },
];

describe('numFriendRequests', () => {
        test.each(
                structuredClone(testcases),
        )('numFriendRequests($ages) -> $expected', ({ ages, expected }) => {
                expect(numFriendRequests(ages)).toStrictEqual(expected);
        });
});
