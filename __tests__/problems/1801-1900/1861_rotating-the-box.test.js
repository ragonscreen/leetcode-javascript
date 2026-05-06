import { describe, expect, test } from 'bun:test';
import { rotateTheBox } from '../../../src/problems/1801-1900/1861_rotating-the-box.js';

const testcases = [
        { boxGrid: [['#', '.', '#']], expected: [['.'], ['#'], ['#']] },
        {
                boxGrid: [
                        ['#', '.', '*', '.'],
                        ['#', '#', '*', '.'],
                ],
                expected: [
                        ['#', '.'],
                        ['#', '#'],
                        ['*', '*'],
                        ['.', '.'],
                ],
        },
        {
                boxGrid: [
                        ['#', '#', '*', '.', '*', '.'],
                        ['#', '#', '#', '*', '.', '.'],
                        ['#', '#', '#', '.', '#', '.'],
                ],
                expected: [
                        ['.', '#', '#'],
                        ['.', '#', '#'],
                        ['#', '#', '*'],
                        ['#', '*', '.'],
                        ['#', '.', '*'],
                        ['#', '.', '.'],
                ],
        },
        {
                boxGrid: [
                        ['#', '#', '*', '.', '*', '*'],
                        ['#', '#', '#', '*', '.', '.'],
                        ['#', '#', '#', '.', '#', '.'],
                ],
                expected: [
                        ['.', '#', '#'],
                        ['.', '#', '#'],
                        ['#', '#', '*'],
                        ['#', '*', '.'],
                        ['#', '.', '*'],
                        ['#', '.', '*'],
                ],
        },
];

describe('rotateTheBox', () => {
        test.each(
                structuredClone(testcases),
        )('rotateTheBox($boxGrid) -> $expected', ({ boxGrid, expected }) => {
                expect(rotateTheBox(boxGrid)).toStrictEqual(expected);
        });
});
