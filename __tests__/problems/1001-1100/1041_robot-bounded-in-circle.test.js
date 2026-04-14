import { describe, expect, test } from 'bun:test';
import { isRobotBounded } from '../../../src/problems/1001-1100/1041_robot-bounded-in-circle.js';

const testcases = [
        { instructions: 'GGLLGG', expected: true },
        { instructions: 'GG', expected: false },
        { instructions: 'GL', expected: true },
        { instructions: 'GRGG', expected: true },
        { instructions: 'GRGRGRGG', expected: true },
        { instructions: 'GLGLGGLGL', expected: false },
        { instructions: 'LRRRRLLLRL', expected: true },
        { instructions: 'GLGLGLGL', expected: true },
];

describe('isRobotBounded', () => {
        test.each(
                structuredClone(testcases),
        )('isRobotBounded($instructions) -> $expected', ({
                instructions,
                expected,
        }) => {
                expect(isRobotBounded(instructions)).toStrictEqual(expected);
        });
});
