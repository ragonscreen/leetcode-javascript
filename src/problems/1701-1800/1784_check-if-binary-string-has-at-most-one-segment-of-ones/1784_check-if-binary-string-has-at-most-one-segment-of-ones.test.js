import { describe, expect, test } from 'bun:test';

import { checkOnesSegment } from './1784_check-if-binary-string-has-at-most-one-segment-of-ones.js';

const testcases = [
        { s: '1001', expected: false },
        { s: '110', expected: true },
];

describe('checkOnesSegment', () => {
        test.each(structuredClone(testcases))(
                'checkOnesSegment($s) -> $expected',
                ({ s, expected }) => {
                        expect(checkOnesSegment(s)).toStrictEqual(expected);
                },
        );
});
