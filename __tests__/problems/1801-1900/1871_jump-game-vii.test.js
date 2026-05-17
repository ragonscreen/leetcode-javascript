import { describe, expect, test } from 'bun:test';
import {
        canReach,
        canReach1,
} from '../../../src/problems/1801-1900/1871_jump-game-vii.js';

const testcases = [
        { s: '011010', minJump: 2, maxJump: 3, expected: true },
        { s: '01101110', minJump: 2, maxJump: 3, expected: false },
];

describe('canReach', () => {
        test.each(
                structuredClone(testcases),
        )('canReach($s, $minJump, $maxJump) -> $expected', ({
                s,
                minJump,
                maxJump,
                expected,
        }) => {
                expect(canReach(s, minJump, maxJump)).toStrictEqual(expected);
        });
});

describe('canReach1', () => {
        test.each(
                structuredClone(testcases),
        )('canReach1($s, $minJump, $maxJump) -> $expected', ({
                s,
                minJump,
                maxJump,
                expected,
        }) => {
                expect(canReach1(s, minJump, maxJump)).toStrictEqual(expected);
        });
});
