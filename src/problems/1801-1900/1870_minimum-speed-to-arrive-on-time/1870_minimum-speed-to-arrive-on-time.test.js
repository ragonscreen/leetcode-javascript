import { describe, expect, test } from 'bun:test';

import { minSpeedOnTime } from './1870_minimum-speed-to-arrive-on-time.js';

const testcases = [
        { dist: [1, 3, 2], hour: 6, expected: 1 },
        { dist: [1, 3, 2], hour: 2.7, expected: 3 },
        { dist: [1, 3, 2], hour: 1.9, expected: -1 },
        { dist: [1, 1, 100_000], hour: 2.01, expected: 10_000_000 },
];

describe('minSpeedOnTime', () => {
        test.each(structuredClone(testcases))(
                'minSpeedOnTime($dist, $hour) -> $expected',
                ({ dist, hour, expected }) => {
                        expect(minSpeedOnTime(dist, hour)).toStrictEqual(expected);
                },
        );
});
