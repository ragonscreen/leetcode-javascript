import { describe, expect, test } from 'bun:test';
import { minDamage } from '../../../src/problems/3201-3300/3273_minimum-amount-of-damage-dealt-to-bob.js';

const testcases = [
        { power: 4, damage: [1, 2, 3, 4], health: [4, 5, 6, 8], expected: 39 },
        { power: 1, damage: [1, 1, 1, 1], health: [1, 2, 3, 4], expected: 20 },
        { power: 8, damage: [40], health: [59], expected: 320 },
        { power: 7, damage: [4, 3, 2, 1], health: [6, 7, 8, 9], expected: 24 },
        { power: 1, damage: [3, 20], health: [1, 2], expected: 49 },
        { power: 1, damage: [3, 2], health: [1, 2], expected: 9 },
        { power: 1, damage: [3, 5], health: [1, 2], expected: 18 },
        { power: 1, damage: [3, 7], health: [1, 2], expected: 23 },
];

describe('minDamage', () => {
        test.each(
                structuredClone(testcases),
        )('minDamage($power, $damage, $health) -> $expected', ({
                power,
                damage,
                health,
                expected,
        }) => {
                expect(minDamage(power, damage, health)).toStrictEqual(
                        expected,
                );
        });
});
