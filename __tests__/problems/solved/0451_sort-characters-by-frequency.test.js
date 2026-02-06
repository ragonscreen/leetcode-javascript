import { describe, expect, test } from 'vitest';
import { frequencySort } from '../../../src/problems/solved/0451_sort-characters-by-frequency.js';

describe('frequencySort', () => {
        test('basic test 1', () => {
                expect(frequencySort('tree')).toBeOneOf(['eert', 'eetr']);
        });

        test('basic test 2', () => {
                expect(frequencySort('cccaaa')).toBeOneOf(['aaaccc', 'cccaaa']);
        });

        test('basic test 3', () => {
                expect(frequencySort('Aabb')).toBeOneOf(['bbAa', 'bbaA']);
        });

        test('basic test 4', () => {
                expect(
                        frequencySort('2a554442f544asfasssffffasss'),
                ).toStrictEqual('sssssssffffff44444aaaa55522');
        });
});
