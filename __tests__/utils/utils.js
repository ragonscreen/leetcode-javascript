const normaliseNestedArray = (matrix) => {
        const res = [];

        for (const arr of matrix) {
                const _arr = [...arr].sort((a, b) => a.localeCompare(b));
                res.push(_arr);
        }

        res.sort((a, b) => a.length - b.length);

        return res;
};

const normaliseNestedArrayNums = (matrix) => {
        const res = [];

        for (const arr of matrix) {
                const _arr = [...arr].sort((a, b) => a - b);
                res.push(_arr);
        }

        res.sort((a, b) => a.length - b.length);

        return res;
};

const normaliseNegZero = (e) => (Object.is(e, -0) ? 0 : e);

export { normaliseNestedArray, normaliseNestedArrayNums, normaliseNegZero };
