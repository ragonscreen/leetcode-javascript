import { describe, expect, test } from 'vitest';
import { numUniqueEmails } from '../src/problems/solved/0929_unique-email-addresses.js';

describe('numUniqueEmails', () => {
        test('basic test 1', () => {
                expect(
                        numUniqueEmails([
                                'test.email+alex@leetcode.com',
                                'test.e.mail+bob.cathy@leetcode.com',
                                'testemail+david@lee.tcode.com',
                        ]),
                ).toStrictEqual(2);
        });

        test('basic test 2', () => {
                expect(
                        numUniqueEmails([
                                'a@leetcode.com',
                                'b@leetcode.com',
                                'c@leetcode.com',
                        ]),
                ).toStrictEqual(3);
        });
});
