import { describe, expect, test } from 'bun:test';
import {
        dividePlayers,
        dividePlayers1,
} from '../../../src/problems/2401-2500/2491_divide-players-into-teams-of-equal-skill.js';

const testcases = [
        { skill: [3, 2, 5, 1, 3, 4], expected: 22 },
        { skill: [3, 4], expected: 12 },
        { skill: [1, 1, 2, 3], expected: -1 },
];

describe('dividePlayers', () => {
        test.each(
                structuredClone(testcases),
        )('dividePlayers($skill) -> $expected', ({ skill, expected }) => {
                expect(dividePlayers(skill)).toStrictEqual(expected);
        });
});

describe('dividePlayers1', () => {
        test.each(
                structuredClone(testcases),
        )('dividePlayers1($skill) -> $expected', ({ skill, expected }) => {
                expect(dividePlayers1(skill)).toStrictEqual(expected);
        });
});
