import { describe, expect, test } from 'bun:test';

import { isEscapePossible } from '../../../src/problems/1001-1100/1036_escape-a-large-maze.js';

const testcases = [
        {
                blocked: [
                        [0, 1],
                        [1, 0],
                ],
                source: [0, 0],
                target: [0, 2],
                expected: false,
        },
        { blocked: [], source: [0, 0], target: [999_999, 999_999], expected: true },
        {
                blocked: [
                        [691_938, 300_406],
                        [710_196, 624_190],
                        [858_790, 609_485],
                        [268_029, 225_806],
                        [200_010, 188_664],
                        [132_599, 612_099],
                        [329_444, 633_495],
                        [196_657, 757_958],
                        [628_509, 883_388],
                ],
                source: [655_988, 180_910],
                target: [267_728, 840_949],
                expected: true,
        },
        {
                blocked: [
                        [0, 3],
                        [1, 0],
                        [1, 1],
                        [1, 2],
                        [1, 3],
                ],
                source: [0, 0],
                target: [0, 2],
                expected: true,
        },
        {
                blocked: [
                        [0, 999_991],
                        [0, 999_993],
                        [0, 999_996],
                        [1, 999_996],
                        [1, 999_997],
                        [1, 999_998],
                        [1, 999_999],
                ],
                source: [0, 999_997],
                target: [0, 2],
                expected: false,
        },
];

describe('isEscapePossible', () => {
        test.each(structuredClone(testcases))(
                'isEscapePossible($blocked, $source, $target) -> $expected',
                ({ blocked, source, target, expected }) => {
                        expect(isEscapePossible(blocked, source, target)).toStrictEqual(expected);
                },
        );
});
