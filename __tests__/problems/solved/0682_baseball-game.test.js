import { describe, expect, test } from 'bun:test';
import { calPoints } from '../../../src/problems/solved/0682_baseball-game.js';

describe('calPoints', () => {
        test('basic test 1', () => {
                expect(calPoints(['5', '2', 'C', 'D', '+'])).toStrictEqual(30);
        });

        test('basic test 2', () => {
                expect(
                        calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']),
                ).toStrictEqual(27);
        });

        test('basic test 3', () => {
                expect(calPoints(['1', 'C'])).toStrictEqual(0);
        });
});
