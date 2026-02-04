// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'vitest';
import { groupStrings } from '../src/problems/solved/0249_group-shifted-strings.js';
import { arrDeepSortAlpha } from './utils/arrays.js';

describe('groupStrings', () => {
        test('basic test 1', () => {
                const received = groupStrings([
                        'abc',
                        'bcd',
                        'acef',
                        'xyz',
                        'az',
                        'ba',
                        'a',
                        'z',
                ]);
                const expected = [
                        ['acef'],
                        ['az', 'ba'],
                        ['abc', 'bcd', 'xyz'],
                        ['a', 'z'],
                ];

                expect(arrDeepSortAlpha(received)).toStrictEqual(
                        arrDeepSortAlpha(expected),
                );
        });

        test('basic test 2', () => {
                const received = groupStrings(['a']);
                const expected = [['a']];

                expect(arrDeepSortAlpha(received)).toStrictEqual(
                        arrDeepSortAlpha(expected),
                );
        });

        test('basic test 3', () => {
                const received = groupStrings([
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
                ]);
                const expected = [
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
                ];

                expect(arrDeepSortAlpha(received)).toStrictEqual(
                        arrDeepSortAlpha(expected),
                );
        });
});
