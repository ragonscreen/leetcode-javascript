import { describe, expect, test } from 'bun:test';
import { sumAndMultiply } from '../../../src/problems/3701-3800/3756_concatenate-non-zero-digits-and-multiply-by-sum-ii.js';

const testcases = [
        {
                s: '10203004',
                queries: [
                        [0, 7],
                        [1, 3],
                        [4, 6],
                ],
                expected: [12_340, 4, 9],
        },
        {
                s: '1000',
                queries: [
                        [0, 3],
                        [1, 1],
                ],
                expected: [1, 0],
        },
        { s: '9876543210', queries: [[0, 9]], expected: [444_444_137] },
        {
                s: '14020',
                queries: [
                        [0, 3],
                        [1, 3],
                        [1, 4],
                ],
                expected: [994, 252, 252],
        },
        {
                s: '2711785625',
                queries: [
                        [0, 0],
                        [0, 1],
                        [0, 2],
                        [0, 3],
                        [0, 4],
                        [0, 5],
                        [0, 7],
                        [0, 8],
                        [0, 9],
                        [1, 3],
                        [1, 4],
                        [1, 6],
                        [1, 7],
                        [1, 8],
                        [1, 9],
                        [2, 3],
                        [2, 4],
                        [2, 6],
                        [2, 7],
                        [2, 8],
                        [2, 9],
                        [3, 4],
                        [3, 5],
                        [4, 4],
                        [4, 5],
                        [4, 6],
                        [4, 7],
                        [4, 8],
                        [4, 9],
                        [5, 5],
                        [5, 7],
                        [5, 8],
                        [5, 9],
                        [6, 6],
                        [6, 7],
                        [6, 8],
                        [7, 7],
                        [7, 8],
                        [7, 9],
                        [8, 9],
                ],
                expected: [
                        4, 243, 2710, 29_821, 488_106, 7_050_628, 3_360_665,
                        575_963_848, 318_566_667, 6399, 113_872, 20_641_765,
                        249_124_960, 633_606_780, 894_996_047, 22, 1053,
                        259_270, 3_299_968, 35_356_860, 412_496_875, 136, 2848,
                        49, 1170, 15_700, 204_256, 2_199_736, 25_925_625, 64,
                        16_264, 179_802, 2_226_250, 25, 616, 7306, 36, 496,
                        8125, 175,
                ],
        },
];

describe('sumAndMultiply', () => {
        test.each(
                structuredClone(testcases),
        )('sumAndMultiply($s, $queries) -> $expected', ({
                s,
                queries,
                expected,
        }) => {
                expect(Array.from(sumAndMultiply(s, queries))).toStrictEqual(
                        expected,
                );
        });
});
