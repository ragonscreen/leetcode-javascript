import { describe, expect, test } from 'bun:test';
import { gameOfLife } from '../../../src/problems/0201-0300/0289_game-of-life.js';

const testcases = [
        { board: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]], expected: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]] },
        { board: [[1,1],[1,0]], expected: [[1,1],[1,1]] },
];

describe('gameOfLife', () => {
        test.each(structuredClone(testcases))('gameOfLife($board) -> $expected', ({ board, expected }) => {
                expect(gameOfLife(board)).toBeNil();
                expect(board).toStrictEqual(expected);
        });
});