import { describe, expect, test } from 'bun:test';

import { processStr } from '../../../src/problems/3601-3700/3614_process-string-with-special-operations-ii.js';

const testcases = [
        { s: 'a#b%*', k: 1, expected: 'a' },
        { s: 'cd%#*#', k: 3, expected: 'd' },
        { s: 'z*#', k: 0, expected: '.' },
        { s: 'abc#d#e', k: 10, expected: 'a' },
        { s: 'cde##*%', k: 10, expected: 'c' },
        { s: 'cde##*', k: 10, expected: 'd' },
        { s: 'qe*vkg', k: 0, expected: 'q' },
        { s: '#jief%k', k: 0, expected: 'f' },
        { s: '#jief%k*', k: 3, expected: 'j' },
        { s: '#ji*ef%k*', k: 2, expected: 'j' },
        { s: 'wuxi##%u#%', k: 18, expected: 'w' },
        { s: 'h#a#%r##c#', k: 2, expected: 'h' },
        {
                s: '%edx#n#lkc####uom##qg#%#b#ek%##%%ocr#m%#fv%i%%#n#u%%#n#q%v#rwvd##t###%#%%%o*##r#gr*gz#dm%ez',
                k: 4780,
                expected: 'd',
        },
];

describe('processStr', () => {
        test.each(structuredClone(testcases))(
                'processStr($s, $k) -> $expected',
                ({ s, k, expected }) => {
                        expect(processStr(s, k)).toStrictEqual(expected);
                },
        );
});
