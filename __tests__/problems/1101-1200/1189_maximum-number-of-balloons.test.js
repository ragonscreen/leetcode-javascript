import { describe, expect, test } from 'bun:test';

import { maxNumberOfBalloons } from '../../../src/problems/1101-1200/1189_maximum-number-of-balloons.js';

const testcases = [
        { text: 'nlaebolko', expected: 1 },
        { text: 'loonbalxballpoon', expected: 2 },
        { text: 'leetcode', expected: 0 },
];

describe('maxNumberOfBalloons', () => {
        test.each(structuredClone(testcases))(
                'maxNumberOfBalloons($text) -> $expected',
                ({ text, expected }) => {
                        expect(maxNumberOfBalloons(text)).toStrictEqual(expected);
                },
        );
});
