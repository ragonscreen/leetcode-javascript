import { describe, expect, test } from 'bun:test';
import { minimumRounds } from '../../../src/problems/2201-2300/2244_minimum-rounds-to-complete-all-tasks.js';

const testcases = [
        { tasks: [2, 2, 3, 3, 2, 4, 4, 4, 4, 4], expected: 4 },
        { tasks: [2, 3, 3], expected: -1 },
];

describe('minimumRounds', () => {
        test.each(
                structuredClone(testcases),
        )('minimumRounds($tasks) -> $expected', ({ tasks, expected }) => {
                expect(minimumRounds(tasks)).toStrictEqual(expected);
        });
});
