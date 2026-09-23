import { describe, expect, test } from 'bun:test';

import {
        numOfUnplacedFruits,
        numOfUnplacedFruits1,
} from '../../../src/problems/3401-3500/3477_fruits-into-baskets-ii.js';

const testcases = [
        { fruits: [4, 2, 5], baskets: [3, 5, 4], expected: 1 },
        { fruits: [3, 6, 1], baskets: [6, 4, 7], expected: 0 },
        { fruits: [38, 2], baskets: [59, 63], expected: 0 },
];

describe('numOfUnplacedFruits', () => {
        test.each(structuredClone(testcases))(
                'numOfUnplacedFruits($fruits, $baskets) -> $expected',
                ({ fruits, baskets, expected }) => {
                        expect(numOfUnplacedFruits(fruits, baskets)).toStrictEqual(expected);
                },
        );
});

describe('numOfUnplacedFruits1', () => {
        test.each(structuredClone(testcases))(
                'numOfUnplacedFruits1($fruits, $baskets) -> $expected',
                ({ fruits, baskets, expected }) => {
                        expect(numOfUnplacedFruits1(fruits, baskets)).toStrictEqual(expected);
                },
        );
});
