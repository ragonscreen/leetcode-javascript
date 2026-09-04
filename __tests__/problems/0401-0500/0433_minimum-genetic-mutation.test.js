import { describe, expect, test } from 'bun:test';

import { minMutation } from '../../../src/problems/0401-0500/0433_minimum-genetic-mutation.js';

const testcases = [
        { startGene: 'AACCGGTT', endGene: 'AACCGGTA', bank: ['AACCGGTA'], expected: 1 },
        {
                startGene: 'AACCGGTT',
                endGene: 'AAACGGTA',
                bank: ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'],
                expected: 2,
        },
        {
                startGene: 'AAAACCCC',
                endGene: 'CCCCCCCC',
                bank: [
                        'AAAACCCA',
                        'AAACCCCA',
                        'AACCCCCA',
                        'AACCCCCC',
                        'ACCCCCCC',
                        'CCCCCCCC',
                        'AAACCCCC',
                        'AACCCCCC',
                ],
                expected: 4,
        },
];

describe('minMutation', () => {
        test.each(structuredClone(testcases))(
                'minMutation($startGene, $endGene, $bank) -> $expected',
                ({ startGene, endGene, bank, expected }) => {
                        expect(minMutation(startGene, endGene, bank)).toStrictEqual(expected);
                },
        );
});
