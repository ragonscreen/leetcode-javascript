import { describe, expect, test } from 'bun:test';

import { countServers } from './2747_count-zero-request-servers.js';

const testcases = [
        {
                n: 3,
                logs: [
                        [1, 3],
                        [2, 6],
                        [1, 5],
                ],
                x: 5,
                queries: [10, 11],
                expected: [1, 2],
        },
        {
                n: 3,
                logs: [
                        [2, 4],
                        [2, 1],
                        [1, 2],
                        [3, 1],
                ],
                x: 2,
                queries: [3, 4],
                expected: [0, 1],
        },
];

describe('countServers', () => {
        test.each(structuredClone(testcases))(
                'countServers($n, $logs, $x, $queries) -> $expected',
                ({ n, logs, x, queries, expected }) => {
                        expect([...countServers(n, logs, x, queries)]).toStrictEqual(expected);
                },
        );
});
