import { describe, expect, test } from 'bun:test';
import { processStr } from '../../../src/problems/3601-3700/3612_process-string-with-special-operations-i.js';

const testcases = [
        { s: 'a#b%*', expected: 'ba' },
        { s: 'z*#', expected: '' },
];

describe('processStr', () => {
        test.each(structuredClone(testcases))('processStr($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(processStr(s)).toStrictEqual(expected);
        });
});
