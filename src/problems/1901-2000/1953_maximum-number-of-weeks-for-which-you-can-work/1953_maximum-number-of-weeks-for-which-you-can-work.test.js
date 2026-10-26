import { describe, expect, test } from 'bun:test';

import { numberOfWeeks } from './1953_maximum-number-of-weeks-for-which-you-can-work.js';

const testcases = [
        { milestones: [1, 2, 3], expected: 6 },
        { milestones: [5, 2, 1], expected: 7 },
        { milestones: [9, 3, 6, 8, 2, 1], expected: 29 },
        { milestones: [5, 7, 5, 7, 9, 7], expected: 40 },
];

describe('numberOfWeeks', () => {
        test.each(structuredClone(testcases))(
                'numberOfWeeks($milestones) -> $expected',
                ({ milestones, expected }) => {
                        expect(numberOfWeeks(milestones)).toStrictEqual(expected);
                },
        );
});
