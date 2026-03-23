import { describe, expect, test } from 'bun:test';
import {
        minRemoveToMakeValid,
        minRemoveToMakeValid1,
} from '../../../src/problems/1201-1300/1249_minimum-remove-to-make-valid-parentheses.js';

const testcases = [
        { s: 'lee(t(c)o)de)' },
        { s: 'a)b(c)d' },
        { s: '))((' },
        { s: 'a(b(c)d' },
];

describe('minRemoveToMakeValid', () => {
        test.each(
                structuredClone(testcases),
        )('minRemoveToMakeValid($s) -> $expected', ({ s }) => {
                const received = minRemoveToMakeValid(s);
                let countOpen = 0;
                let countClose = 0;
                let countCloseBeforeOpen = 0;

                for (const c of received) {
                        if (c === '(') {
                                countOpen++;
                        }

                        if (c === ')') {
                                countClose++;

                                if (countOpen < countClose) {
                                        countCloseBeforeOpen++;
                                }
                        }
                }

                expect(countOpen).toStrictEqual(countClose);
                expect(countCloseBeforeOpen).toStrictEqual(0);
        });
});

describe('minRemoveToMakeValid1', () => {
        test.each(
                structuredClone(testcases),
        )('minRemoveToMakeValid1($s) -> $expected', ({ s }) => {
                const received = minRemoveToMakeValid1(s);
                let countOpen = 0;
                let countClose = 0;
                let countCloseBeforeOpen = 0;

                for (const c of received) {
                        if (c === '(') {
                                countOpen++;
                        }

                        if (c === ')') {
                                countClose++;

                                if (countOpen < countClose) {
                                        countCloseBeforeOpen++;
                                }
                        }
                }

                expect(countOpen).toStrictEqual(countClose);
                expect(countCloseBeforeOpen).toStrictEqual(0);
        });
});
