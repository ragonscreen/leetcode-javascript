import { describe, expect, test } from 'bun:test';
import { numUniqueEmails } from '../../../src/problems/0901-1000/0929_unique-email-addresses.js';

const testcases = [
        {
                emails: [
                        'test.email+alex@leetcode.com',
                        'test.e.mail+bob.cathy@leetcode.com',
                        'testemail+david@lee.tcode.com',
                ],
                expected: 2,
        },
        {
                emails: ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'],
                expected: 3,
        },
];

describe('numUniqueEmails', () => {
        test.each(
                structuredClone(testcases),
        )('numUniqueEmails($emails) -> $expected', ({ emails, expected }) => {
                expect(numUniqueEmails(emails)).toStrictEqual(expected);
        });
});
