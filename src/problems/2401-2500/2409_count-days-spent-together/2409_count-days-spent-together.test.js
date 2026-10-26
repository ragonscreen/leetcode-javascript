import { describe, expect, test } from 'bun:test';

import { countDaysTogether } from './2409_count-days-spent-together.js';

const testcases = [
        {
                arriveAlice: '08-15',
                leaveAlice: '08-18',
                arriveBob: '08-16',
                leaveBob: '08-19',
                expected: 3,
        },
        {
                arriveAlice: '10-01',
                leaveAlice: '10-31',
                arriveBob: '11-01',
                leaveBob: '12-31',
                expected: 0,
        },
        {
                arriveAlice: '09-01',
                leaveAlice: '10-19',
                arriveBob: '06-19',
                leaveBob: '10-20',
                expected: 49,
        },
        {
                arriveAlice: '10-20',
                leaveAlice: '12-22',
                arriveBob: '06-21',
                leaveBob: '07-05',
                expected: 0,
        },
];

describe('countDaysTogether', () => {
        test.each(structuredClone(testcases))(
                'countDaysTogether($arriveAlice, $leaveAlice, $arriveBob, $leaveBob) -> $expected',
                ({ arriveAlice, leaveAlice, arriveBob, leaveBob, expected }) => {
                        expect(
                                countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob),
                        ).toStrictEqual(expected);
                },
        );
});
