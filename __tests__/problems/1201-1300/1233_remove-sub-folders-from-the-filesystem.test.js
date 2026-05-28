import { describe, expect, test } from 'bun:test';
import {
        removeSubfolders,
        removeSubfolders1,
        removeSubfolders2,
} from '../../../src/problems/1201-1300/1233_remove-sub-folders-from-the-filesystem.js';

const testcases = [
        {
                folder: ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'],
                expected: ['/a', '/c/d', '/c/f'],
        },
        { folder: ['/a', '/a/b/c', '/a/b/d'], expected: ['/a'] },
        {
                folder: ['/a/b/c', '/a/b/ca', '/a/b/d'],
                expected: ['/a/b/c', '/a/b/ca', '/a/b/d'],
        },
];

describe('removeSubfolders', () => {
        test.each(
                structuredClone(testcases),
        )('removeSubfolders($folder) -> $expected', ({ folder, expected }) => {
                expect(removeSubfolders(folder)).toStrictEqual(expected);
        });
});

describe('removeSubfolders1', () => {
        test.each(
                structuredClone(testcases),
        )('removeSubfolders1($folder) -> $expected', ({ folder, expected }) => {
                expect(removeSubfolders1(folder)).toStrictEqual(expected);
        });
});

describe('removeSubfolders2', () => {
        test.each(
                structuredClone(testcases),
        )('removeSubfolders2($folder) -> $expected', ({ folder, expected }) => {
                expect(removeSubfolders2(folder)).toStrictEqual(expected);
        });
});
