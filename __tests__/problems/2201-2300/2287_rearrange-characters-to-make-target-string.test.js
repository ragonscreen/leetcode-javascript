import { describe, expect, test } from 'bun:test';

import { rearrangeCharacters } from '../../../src/problems/2201-2300/2287_rearrange-characters-to-make-target-string.js';

const testcases = [
        { s: 'ilovecodingonleetcode', target: 'code', expected: 2 },
        { s: 'abcba', target: 'abc', expected: 1 },
        { s: 'abbaccaddaeea', target: 'aaaaa', expected: 1 },
        { s: 'aaaaa', target: 'a', expected: 5 },
];

describe('rearrangeCharacters', () => {
        test.each(structuredClone(testcases))(
                'rearrangeCharacters($s, $target) -> $expected',
                ({ s, target, expected }) => {
                        expect(rearrangeCharacters(s, target)).toStrictEqual(expected);
                },
        );
});
