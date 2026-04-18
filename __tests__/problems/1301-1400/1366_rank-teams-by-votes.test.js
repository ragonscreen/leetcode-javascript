import { describe, expect, test } from 'bun:test';
import { rankTeams } from '../../../src/problems/1301-1400/1366_rank-teams-by-votes.js';

const testcases = [
        { votes: ['ABC', 'ACB', 'ABC', 'ACB', 'ACB'], expected: 'ACB' },
        { votes: ['WXYZ', 'XYZW'], expected: 'XWYZ' },
        {
                votes: ['ZMNAGUEDSJYLBOPHRQICWFXTVK'],
                expected: 'ZMNAGUEDSJYLBOPHRQICWFXTVK',
        },
        {
                votes: [
                        'FVSHJIEMNGYPTQOURLWCZKAX',
                        'AITFQORCEHPVJMXGKSLNZWUY',
                        'OTERVXFZUMHNIYSCQAWGPKJL',
                        'VMSERIJYLZNWCPQTOKFUHAXG',
                        'VNHOZWKQCEFYPSGLAMXJIUTR',
                        'ANPHQIJMXCWOSKTYGULFVERZ',
                        'RFYUXJEWCKQOMGATHZVILNSP',
                        'SCPYUMQJTVEXKRNLIOWGHAFZ',
                        'VIKTSJCEYQGLOMPZWAHFXURN',
                        'SVJICLXKHQZTFWNPYRGMEUAO',
                        'JRCTHYKIGSXPOZLUQAVNEWFM',
                        'NGMSWJITREHFZVQCUKXYAPOL',
                        'WUXJOQKGNSYLHEZAFIPMRCVT',
                        'PKYQIOLXFCRGHZNAMJVUTWES',
                        'FERSGNMJVZXWAYLIKCPUQHTO',
                        'HPLRIUQMTSGYJVAXWNOCZEKF',
                        'JUVWPTEGCOFYSKXNRMHQALIZ',
                        'MWPIAZCNSLEYRTHFKQXUOVGJ',
                        'EZXLUNFVCMORSIWKTYHJAQPG',
                        'HRQNLTKJFIEGMCSXAZPYOVUW',
                        'LOHXVYGWRIJMCPSQENUAKTZF',
                        'XKUTWPRGHOAQFLVYMJSNEIZC',
                        'WTCRQMVKPHOSLGAXZUEFYNJI',
                ],
                expected: 'VWFHSJARNPEMOXLTUKICZGYQ',
        },
        {
                votes: ['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC'],
                expected: 'ABC',
        },
];

describe('rankTeams', () => {
        test.each(
                structuredClone(testcases),
        )('rankTeams($votes) -> $expected', ({ votes, expected }) => {
                expect(rankTeams(votes)).toStrictEqual(expected);
        });
});
