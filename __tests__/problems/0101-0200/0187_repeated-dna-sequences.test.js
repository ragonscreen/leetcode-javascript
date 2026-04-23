import { describe, expect, test } from 'bun:test';
import {
        findRepeatedDnaSequences,
        findRepeatedDnaSequences1,
} from '../../../src/problems/0101-0200/0187_repeated-dna-sequences.js';

const testcases = [
        {
                s: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
                expected: ['AAAAACCCCC', 'CCCCCAAAAA'],
        },
        { s: 'AAAAAAAAAAAAA', expected: ['AAAAAAAAAA'] },
        {
                s: 'ACCCTCCCACTTGGATGCCGCACGTGTCGACTAACCTTACATTGTCCCCCCACCTCCAGACGGTTAACTCTTGAAATGGGGGAATAGCTGCTTGCGCGTG',
                expected: [],
        },
        {
                s: 'CGACGCAATTTAGAACGGGCCGCACTGCAACCATTGCTCAGACAACGCATGAGTTAAATTTCACAAGTGATAGTGGCTTGCGAGACGTGGGTTGGTGGTAGCGTACGCCCGCTATTCGCCCCTAACGTGACGGGATTATAAGGTCGCTTCCCGGAATGCGCAGACGAGTCTCCGGTTTAGCCTAGACGTCTCACGCGCGCAAGGCGTCAGTTCTCACTATCTCGCACAGGTGTATTCTATTAGTTATGGGTTCTCACTACAGTCGGTTACTTCCTCATCCATTTCTGCATACGGGTCAACTAACAGTGTCATGGGGTATTGGGAAGGATGCGTTTTTAAACCCTCTCAGTAGCGCGAGGATGCCCACAAATACGACGGCGGCCACGGATCTAATGCGAAGCTAGCGACGCTTTCCAGCAACGAGCGCCCCACTTATGACTGCGTGGGGCGCTCCGCTTTCCTAGAGAACATAGATGGTGTTTTCGAATCGTAACCACTTA',
                expected: ['GTTCTCACTA'],
        },
];

describe('findRepeatedDnaSequences', () => {
        test.each(
                structuredClone(testcases),
        )('findRepeatedDnaSequences($s) -> $expected', ({ s, expected }) => {
                expect(findRepeatedDnaSequences(s)).toStrictEqual(expected);
        });
});

describe('findRepeatedDnaSequences1', () => {
        test.each(
                structuredClone(testcases),
        )('findRepeatedDnaSequences1($s) -> $expected', ({ s, expected }) => {
                expect(findRepeatedDnaSequences1(s)).toStrictEqual(expected);
        });
});
