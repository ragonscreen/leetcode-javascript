import { describe, expect, test } from 'bun:test';
import {
        numRescueBoats,
        numRescueBoats1,
        numRescueBoats2,
} from '../../../src/problems/0801-0900/0881_boats-to-save-people.js';

const testcases = [
        { people: [1, 2], limit: 3, expected: 1 },
        { people: [3, 2, 2, 1], limit: 3, expected: 3 },
        { people: [3, 5, 3, 4], limit: 5, expected: 4 },
];

describe('numRescueBoats', () => {
        test.each(
                structuredClone(testcases),
        )('numRescueBoats($people, $limit) -> $expected', ({
                people,
                limit,
                expected,
        }) => {
                expect(numRescueBoats(people, limit)).toStrictEqual(expected);
        });
});

describe('numRescueBoats1', () => {
        test.each(
                structuredClone(testcases),
        )('numRescueBoats1($people, $limit) -> $expected', ({
                people,
                limit,
                expected,
        }) => {
                expect(numRescueBoats1(people, limit)).toStrictEqual(expected);
        });
});

describe('numRescueBoats2', () => {
        test.each(
                structuredClone(testcases),
        )('numRescueBoats2($people, $limit) -> $expected', ({
                people,
                limit,
                expected,
        }) => {
                expect(numRescueBoats2(people, limit)).toStrictEqual(expected);
        });
});
