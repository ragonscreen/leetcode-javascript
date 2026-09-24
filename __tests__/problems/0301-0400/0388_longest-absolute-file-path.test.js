import { describe, expect, test } from 'bun:test';

import { lengthLongestPath } from '../../../src/problems/0301-0400/0388_longest-absolute-file-path.js';

const testcases = [
        { input: 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext', expected: 20 },
        {
                input: 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext',
                expected: 32,
        },
        { input: 'a', expected: 0 },
        { input: 'file1.txt\nfile2.txt\nlongfile.txt', expected: 12 },
];

describe('lengthLongestPath', () => {
        test.each(structuredClone(testcases))(
                'lengthLongestPath($input) -> $expected',
                ({ input, expected }) => {
                        expect(lengthLongestPath(input)).toStrictEqual(expected);
                },
        );
});
