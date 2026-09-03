import { describe, expect, test } from 'bun:test';

import { angleClock } from '../../../src/problems/1301-1400/1344_angle-between-hands-of-a-clock.js';

const testcases = [
        { hour: 12, minutes: 30, expected: 165 },
        { hour: 3, minutes: 30, expected: 75 },
        { hour: 3, minutes: 15, expected: 7.5 },
];

describe('angleClock', () => {
        test.each(structuredClone(testcases))(
                'angleClock($hour, $minutes) -> $expected',
                ({ hour, minutes, expected }) => {
                        expect(angleClock(hour, minutes)).toStrictEqual(expected);
                },
        );
});
