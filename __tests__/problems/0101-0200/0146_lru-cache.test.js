import { describe, expect, test } from 'bun:test';
import { LRUCache } from '../../../src/problems/0101-0200/0146_lru-cache.js';

describe('LRUCache', () => {
        test('default test 1', () => {
                const lRUCache = new LRUCache(2);

                expect(lRUCache.put(1, 1)).toBeNil();
                expect(lRUCache.put(2, 2)).toBeNil();
                expect(lRUCache.get(1)).toStrictEqual(1);
                expect(lRUCache.put(3, 3)).toBeNil();
                expect(lRUCache.get(2)).toStrictEqual(-1);
                expect(lRUCache.put(4, 4)).toBeNil();
                expect(lRUCache.get(1)).toStrictEqual(-1);
                expect(lRUCache.get(3)).toStrictEqual(3);
                expect(lRUCache.get(4)).toStrictEqual(4);
        });

        test('default test 2', () => {
                const lRUCache = new LRUCache(2);

                expect(lRUCache.get(2)).toStrictEqual(-1);
                expect(lRUCache.put(2, 6)).toBeNil();
                expect(lRUCache.get(1)).toStrictEqual(-1);
                expect(lRUCache.put(1, 5)).toBeNil();
                expect(lRUCache.put(1, 2)).toBeNil();
                expect(lRUCache.get(1)).toStrictEqual(2);
                expect(lRUCache.get(2)).toStrictEqual(6);
        });

        test('default test 3', () => {
                const lRUCache = new LRUCache(2);

                expect(lRUCache.put(2, 1)).toBeNil();
                expect(lRUCache.put(1, 1)).toBeNil();
                expect(lRUCache.put(2, 3)).toBeNil();
                expect(lRUCache.put(4, 1)).toBeNil();
                expect(lRUCache.get(1)).toStrictEqual(-1);
                expect(lRUCache.get(2)).toStrictEqual(3);
        });
});
