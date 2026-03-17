import { describe, expect, test } from 'bun:test';
import { titleToNumber } from '../../../src/problems/0101-0200/0171_excel-sheet-column-number.js';

const testcases = [
        { columnTitle: 'A', expected: 1 },
        { columnTitle: 'AB', expected: 28 },
        { columnTitle: 'ZY', expected: 701 },
        { columnTitle: 'AAA', expected: 703 },
        { columnTitle: 'AAAA', expected: 18_279 },
        { columnTitle: 'FXSHRXW', expected: 2_147_483_647 },
];

describe('titleToNumber', () => {
        test.each(
                structuredClone(testcases),
        )('titleToNumber($columnTitle) -> $expected', ({
                columnTitle,
                expected,
        }) => {
                expect(titleToNumber(columnTitle)).toStrictEqual(expected);
        });
});
