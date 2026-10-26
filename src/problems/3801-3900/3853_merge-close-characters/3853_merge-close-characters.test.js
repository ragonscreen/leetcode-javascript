import { describe, expect, test } from 'bun:test';

import { mergeCharacters } from './3853_merge-close-characters.js';

const testcases = [
        { s: 'abca', k: 3, expected: 'abc' },
        { s: 'aabca', k: 2, expected: 'abca' },
        { s: 'yybyzybz', k: 2, expected: 'ybzybz' },
];

describe('mergeCharacters', () => {
        test.each(structuredClone(testcases))(
                'mergeCharacters($s, $k) -> $expected',
                ({ s, k, expected }) => {
                        expect(mergeCharacters(s, k)).toStrictEqual(expected);
                },
        );
});
