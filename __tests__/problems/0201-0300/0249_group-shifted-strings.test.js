import { describe, expect, test } from 'bun:test';
import { groupStrings } from '../../../src/problems/0201-0300/0249_group-shifted-strings.js';
import { normaliseNestedArray } from '../../utils/utils.js';

const testcases = [
        {
                strings: ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'],
                expected: [
                        ['acef'],
                        ['az', 'ba'],
                        ['abc', 'bcd', 'xyz'],
                        ['a', 'z'],
                ],
        },
        { strings: ['a'], expected: [['a']] },
        {
                strings: [
                        'fpbnsbrkbcyzdmmmoisaa',
                        'cpjtwqcdwbldwwrryuclcngw',
                        'a',
                        'fnuqwejouqzrif',
                        'js',
                        'qcpr',
                        'zghmdiaqmfelr',
                        'iedda',
                        'l',
                        'dgwlvcyubde',
                        'lpt',
                        'qzq',
                        'zkddvitlk',
                        'xbogegswmad',
                        'mkndeyrh',
                        'llofdjckor',
                        'lebzshcb',
                        'firomjjlidqpsdeqyn',
                        'dclpiqbypjpfafukqmjnjg',
                        'lbpabjpcmkyivbtgdwhzlxa',
                        'wmalmuanxvjtgmerohskwil',
                        'yxgkdlwtkekavapflheieb',
                        'oraxvssurmzybmnzhw',
                        'ohecvkfe',
                        'kknecibjnq',
                        'wuxnoibr',
                        'gkxpnpbfvjm',
                        'lwpphufxw',
                        'sbs',
                        'txb',
                        'ilbqahdzgij',
                        'i',
                        'zvuur',
                        'yfglchzpledkq',
                        'eqdf',
                        'nw',
                        'aiplrzejplumda',
                        'd',
                        'huoybvhibgqibbwwdzhqhslb',
                        'rbnzendwnoklpyyyauemm',
                ],
                expected: [
                        ['js', 'nw'],
                        ['fpbnsbrkbcyzdmmmoisaa', 'rbnzendwnoklpyyyauemm'],
                        [
                                'cpjtwqcdwbldwwrryuclcngw',
                                'huoybvhibgqibbwwdzhqhslb',
                        ],
                        ['a', 'l', 'i', 'd'],
                        ['fnuqwejouqzrif', 'aiplrzejplumda'],
                        ['qcpr', 'eqdf'],
                        ['zghmdiaqmfelr', 'yfglchzpledkq'],
                        ['iedda', 'zvuur'],
                        ['dgwlvcyubde', 'ilbqahdzgij'],
                        ['lpt', 'txb'],
                        ['qzq', 'sbs'],
                        ['zkddvitlk', 'lwpphufxw'],
                        ['xbogegswmad', 'gkxpnpbfvjm'],
                        ['mkndeyrh', 'wuxnoibr'],
                        ['llofdjckor', 'kknecibjnq'],
                        ['lebzshcb', 'ohecvkfe'],
                        ['firomjjlidqpsdeqyn', 'oraxvssurmzybmnzhw'],
                        ['dclpiqbypjpfafukqmjnjg', 'yxgkdlwtkekavapflheieb'],
                        ['lbpabjpcmkyivbtgdwhzlxa', 'wmalmuanxvjtgmerohskwil'],
                ],
        },
];

describe('groupStrings', () => {
        test.each(
                structuredClone(testcases),
        )('groupStrings($strings) -> $expected', ({ strings, expected }) => {
                expect(
                        normaliseNestedArray(groupStrings(strings)),
                ).toStrictEqual(normaliseNestedArray(expected));
        });
});
