import { describe, expect, test } from 'bun:test';

import { findCommonResponse } from './3527_find-the-most-common-response.js';

const testcases = [
        {
                responses: [
                        ['good', 'ok', 'good', 'ok'],
                        ['ok', 'bad', 'good', 'ok', 'ok'],
                        ['good'],
                        ['bad'],
                ],
                expected: 'good',
        },
        {
                responses: [
                        ['good', 'ok', 'good'],
                        ['ok', 'bad'],
                        ['bad', 'notsure'],
                        ['great', 'good'],
                ],
                expected: 'bad',
        },
];

describe('findCommonResponse', () => {
        test.each(structuredClone(testcases))(
                'findCommonResponse($responses) -> $expected',
                ({ responses, expected }) => {
                        expect(findCommonResponse(responses)).toStrictEqual(expected);
                },
        );
});
