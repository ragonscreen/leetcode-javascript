import { describe, expect, test } from 'bun:test';

import { minJumps } from './1345_jump-game-iv.js';

const testcases = [
        { arr: [100, -23, -23, 404, 100, 23, 23, 23, 3, 404], expected: 3 },
        { arr: [7], expected: 0 },
        { arr: [7, 6, 9, 6, 9, 6, 9, 7], expected: 1 },
];

describe('minJumps', () => {
        test.each(structuredClone(testcases))(
                'minJumps($arr) -> $expected',
                ({ arr, expected }) => {
                        expect(minJumps(arr)).toStrictEqual(expected);
                },
        );
});
