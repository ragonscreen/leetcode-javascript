import { describe, expect, test } from 'bun:test';

import { calPoints } from './0682_baseball-game.js';

const testcases = [
        { operations: ['5', '2', 'C', 'D', '+'], expected: 30 },
        { operations: ['5', '-2', '4', 'C', 'D', '9', '+', '+'], expected: 27 },
        { operations: ['1', 'C'], expected: 0 },
        {
                operations: [
                        '15788',
                        '25148',
                        '-24609',
                        '24869',
                        'D',
                        '-23282',
                        '14614',
                        '-2921',
                        'C',
                        '-26517',
                        '1891',
                        'C',
                        '-18324',
                        '+',
                        '+',
                        '-23184',
                        'D',
                        '-12585',
                        'C',
                        'D',
                        '7308',
                        '-11988',
                        '-16148',
                        '+',
                        '8834',
                        '+',
                        '+',
                        'D',
                        '19519',
                        '+',
                        '11289',
                        '+',
                        'D',
                        'C',
                        '-13033',
                        'D',
                        '+',
                        '-278',
                        '-14043',
                        'C',
                        '-906',
                        'C',
                        '28518',
                        'C',
                        '-29295',
                        '-22758',
                        '-13872',
                        '-20255',
                        '29870',
                        '-1104',
                ],
                expected: -420_332,
        },
];

describe('calPoints', () => {
        test.each(structuredClone(testcases))(
                'calPoints($operations) -> $expected',
                ({ operations, expected }) => {
                        expect(calPoints(operations)).toStrictEqual(expected);
                },
        );
});
