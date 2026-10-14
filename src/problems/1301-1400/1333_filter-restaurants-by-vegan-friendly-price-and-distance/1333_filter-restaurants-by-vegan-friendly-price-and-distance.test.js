import { describe, expect, test } from 'bun:test';

import { filterRestaurants } from './1333_filter-restaurants-by-vegan-friendly-price-and-distance.js';

const testcases = [
        {
                restaurants: [
                        [1, 4, 1, 40, 10],
                        [2, 8, 0, 50, 5],
                        [3, 8, 1, 30, 4],
                        [4, 10, 0, 10, 3],
                        [5, 1, 1, 15, 1],
                ],
                veganFriendly: 1,
                maxPrice: 50,
                maxDistance: 10,
                expected: [3, 1, 5],
        },
        {
                restaurants: [
                        [1, 4, 1, 40, 10],
                        [2, 8, 0, 50, 5],
                        [3, 8, 1, 30, 4],
                        [4, 10, 0, 10, 3],
                        [5, 1, 1, 15, 1],
                ],
                veganFriendly: 0,
                maxPrice: 50,
                maxDistance: 10,
                expected: [4, 3, 2, 1, 5],
        },
        {
                restaurants: [
                        [1, 4, 1, 40, 10],
                        [2, 8, 0, 50, 5],
                        [3, 8, 1, 30, 4],
                        [4, 10, 0, 10, 3],
                        [5, 1, 1, 15, 1],
                ],
                veganFriendly: 0,
                maxPrice: 30,
                maxDistance: 3,
                expected: [4, 5],
        },
];

describe('filterRestaurants', () => {
        test.each(structuredClone(testcases))(
                'filterRestaurants($restaurants, $veganFriendly, $maxPrice, $maxDistance) -> $expected',
                ({ restaurants, veganFriendly, maxPrice, maxDistance, expected }) => {
                        expect(
                                filterRestaurants(
                                        restaurants,
                                        veganFriendly,
                                        maxPrice,
                                        maxDistance,
                                ),
                        ).toStrictEqual(expected);
                },
        );
});
