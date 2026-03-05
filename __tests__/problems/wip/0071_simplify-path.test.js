import { describe, expect, test } from 'bun:test';
import { simplifyPath } from '../../../src/problems/wip/0071_simplify-path.js';

describe('simplifyPath', () => {
        describe('simplifyPath', () => {
                test('basic test 1', () => {
                        expect(simplifyPath('/home/')).toStrictEqual('/home');
                });

                test('basic test 2', () => {
                        expect(simplifyPath('/home//foo/')).toStrictEqual(
                                '/home/foo',
                        );
                });

                test('basic test 3', () => {
                        expect(
                                simplifyPath(
                                        '/home/user/Documents/../Pictures',
                                ),
                        ).toStrictEqual('/home/user/Pictures');
                });

                test('basic test 4', () => {
                        expect(simplifyPath('/../')).toStrictEqual('/');
                });

                test('basic test 5', () => {
                        expect(
                                simplifyPath('/.../a/../b/c/../d/./'),
                        ).toStrictEqual('/.../b/d');
                });

                test('custom test 1', () => {
                        expect(
                                simplifyPath('/home/user/Documents/../P'),
                        ).toStrictEqual('/home/user/P');
                });

                test('custom test 2', () => {
                        expect(simplifyPath('/../../')).toStrictEqual('/');
                });

                test('custom test 3', () => {
                        expect(simplifyPath('/././')).toStrictEqual('/');
                });
        });
});
