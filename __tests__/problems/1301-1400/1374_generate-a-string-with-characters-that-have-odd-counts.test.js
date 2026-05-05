import { describe, expect, test } from 'bun:test';
import { generateTheString } from '../../../src/problems/1301-1400/1374_generate-a-string-with-characters-that-have-odd-counts.js';

const testcases = [{ n: 4 }, { n: 2 }, { n: 7 }];

describe('generateTheString', () => {
        test.each(
                structuredClone(testcases),
        )('generateTheString($n) -> $expected', ({ n }) => {
                const countMap = new Map();
                const actual = generateTheString(n);

                for (const char of actual) {
                        countMap.set(char, (countMap.get(char) || 0) + 1);
                }

                expect(actual).toHaveLength(n);
                expect(countMap.values().every((e) => e % 2)).toStrictEqual(
                        true,
                );
        });
});
