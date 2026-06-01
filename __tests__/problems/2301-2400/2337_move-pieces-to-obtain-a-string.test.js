import { describe, expect, test } from 'bun:test';
import {
        canChange,
        canChange1,
} from '../../../src/problems/2301-2400/2337_move-pieces-to-obtain-a-string.js';

const testcases = [
        { start: '_L__R__R_', target: 'L______RR', expected: true },
        { start: 'R_L_', target: '__LR', expected: false },
        { start: '_R', target: 'R_', expected: false },
        { start: 'R__L', target: '_LR_', expected: false },
        { start: '__R_L', target: 'L_R__', expected: false },
        { start: '_L', target: 'LR', expected: false },
];

describe('canChange', () => {
        test.each(
                structuredClone(testcases),
        )('canChange($start, $target) -> $expected', ({
                start,
                target,
                expected,
        }) => {
                expect(canChange(start, target)).toStrictEqual(expected);
        });
});

describe('canChange1', () => {
        test.each(
                structuredClone(testcases),
        )('canChange1($start, $target) -> $expected', ({
                start,
                target,
                expected,
        }) => {
                expect(canChange1(start, target)).toStrictEqual(expected);
        });
});
