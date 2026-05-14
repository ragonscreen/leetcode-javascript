import { describe, expect, test } from 'bun:test';
import { scoreValidator } from '../../../src/problems/3901-4000/3921_score-validator.js';

const testcases = [
        { events: ['1', '4', 'W', '6', 'WD'], expected: [12, 1] },
        { events: ['WD', 'NB', '0', '4', '4'], expected: [10, 0] },
        {
                events: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                expected: [0, 10],
        },
];

describe('scoreValidator', () => {
        test.each(
                structuredClone(testcases),
        )('scoreValidator($events) -> $expected', ({ events, expected }) => {
                expect(scoreValidator(events)).toStrictEqual(expected);
        });
});
