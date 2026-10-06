import { describe, expect, test } from 'bun:test';

import { bulbSwitch } from './0319_bulb-switcher.js';

const testcases = [
        { n: 3, expected: 1 },
        { n: 0, expected: 0 },
        { n: 1, expected: 1 },
        { n: 100, expected: 10 },
        { n: 99, expected: 9 },
];

describe('bulbSwitch', () => {
        test.each(structuredClone(testcases))('bulbSwitch($n) -> $expected', ({ n, expected }) => {
                expect(bulbSwitch(n)).toStrictEqual(expected);
        });
});
