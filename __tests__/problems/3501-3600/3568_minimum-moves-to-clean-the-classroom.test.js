import { describe, expect, test } from 'bun:test';

import {
        minMoves,
        minMoves1,
} from '../../../src/problems/3501-3600/3568_minimum-moves-to-clean-the-classroom.js';

const testcases = [
        { classroom: ['S.', 'XL'], energy: 2, expected: 2 },
        { classroom: ['LS', 'RL'], energy: 4, expected: 3 },
        { classroom: ['L.S', 'RXL'], energy: 3, expected: -1 },
        { classroom: ['SR'], energy: 1, expected: 0 },
        // disabled for test performance
        // {
        //         classroom: [
        //                 'S...................',
        //                 '....................',
        //                 '....................',
        //                 '....................',
        //                 '.....RL........RR...',
        //                 '....................',
        //                 '......L....R..L.....',
        //                 '.....L..............',
        //                 '.........L........LL',
        //                 '....................',
        //                 '....................',
        //                 '....................',
        //                 '........L...........',
        //                 '....................',
        //                 '....................',
        //                 '....................',
        //                 '....L...............',
        //                 '....................',
        //                 '.....R..............',
        //                 '..............L.....',
        //         ],
        //         energy: 20,
        //         expected: 71,
        // },
];

describe('minMoves', () => {
        test.each(structuredClone(testcases))(
                'minMoves($classroom, $energy) -> $expected',
                ({ classroom, energy, expected }) => {
                        expect(minMoves(classroom, energy)).toStrictEqual(expected);
                },
        );
});

describe('minMoves1', () => {
        test.each(structuredClone(testcases))(
                'minMoves1($classroom, $energy) -> $expected',
                ({ classroom, energy, expected }) => {
                        expect(minMoves1(classroom, energy)).toStrictEqual(expected);
                },
        );
});
