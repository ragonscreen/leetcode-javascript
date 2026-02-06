import { describe, expect, test } from 'vitest';
import { evalRPN } from '../../../src/problems/solved/0150_evaluate-reverse-polish-notation.js';

describe('evalRPN', () => {
        test('evaluates reverse polish notation', () => {
                expect(evalRPN(['2', '1', '+', '3', '*'])).toStrictEqual(9);
        });

        test('handles division', () => {
                expect(evalRPN(['4', '13', '5', '/', '+'])).toStrictEqual(6);
        });

        test('handles complex arguments', () => {
                expect(
                        evalRPN([
                                '10',
                                '6',
                                '9',
                                '3',
                                '+',
                                '-11',
                                '*',
                                '/',
                                '*',
                                '17',
                                '+',
                                '5',
                                '+',
                        ]),
                ).toStrictEqual(22);
        });
});
