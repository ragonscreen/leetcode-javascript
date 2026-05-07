import { describe, expect, test } from 'bun:test';
import { subdomainVisits } from '../../../src/problems/0801-0900/0811_subdomain-visit-count.js';

const testcases = [
        {
                cpdomains: ['9001 discuss.leetcode.com'],
                expected: [
                        '9001 leetcode.com',
                        '9001 discuss.leetcode.com',
                        '9001 com',
                ],
        },
        {
                cpdomains: [
                        '900 google.mail.com',
                        '50 yahoo.com',
                        '1 intel.mail.com',
                        '5 wiki.org',
                ],
                expected: [
                        '901 mail.com',
                        '50 yahoo.com',
                        '900 google.mail.com',
                        '5 wiki.org',
                        '5 org',
                        '1 intel.mail.com',
                        '951 com',
                ],
        },
];

describe('subdomainVisits', () => {
        test.each(
                structuredClone(testcases),
        )('subdomainVisits($cpdomains) -> $expected', ({
                cpdomains,
                expected,
        }) => {
                expect(subdomainVisits(cpdomains)).toContainAllValues(expected);
        });
});
