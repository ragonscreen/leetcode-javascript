import { describe, expect, test } from 'bun:test';

import { countStudents } from './1700_number-of-students-unable-to-eat-lunch.js';

const testcases = [
        { students: [1, 1, 0, 0], sandwiches: [0, 1, 0, 1], expected: 0 },
        { students: [1, 1, 1, 0, 0, 1], sandwiches: [1, 0, 0, 0, 1, 1], expected: 3 },
        { students: [1, 1, 1], sandwiches: [0, 0, 0], expected: 3 },
];

describe('countStudents', () => {
        test.each(structuredClone(testcases))(
                'countStudents($students, $sandwiches) -> $expected',
                ({ students, sandwiches, expected }) => {
                        expect(countStudents(students, sandwiches)).toStrictEqual(expected);
                },
        );
});
