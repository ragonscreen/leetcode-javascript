import { describe, expect, test } from 'bun:test';
import {
        countBattleships,
        countBattleships1,
} from '../../../src/problems/0401-0500/0419_battleships-in-a-board.js';

const testcases = [
        {
                board: [
                        ['X', '.', '.', 'X'],
                        ['.', '.', '.', 'X'],
                        ['.', '.', '.', 'X'],
                ],
                expected: 2,
        },
        { board: [['.']], expected: 0 },
        { board: [['X']], expected: 1 },
        { board: [['X', 'X', 'X']], expected: 1 },
        { board: [['X', '.', 'X']], expected: 2 },
];

describe('countBattleships', () => {
        test.each(
                structuredClone(testcases),
        )('countBattleships($board) -> $expected', ({ board, expected }) => {
                expect(countBattleships(board)).toStrictEqual(expected);
        });
});

describe('countBattleships1', () => {
        test.each(
                structuredClone(testcases),
        )('countBattleships1($board) -> $expected', ({ board, expected }) => {
                expect(countBattleships1(board)).toStrictEqual(expected);
        });
});
