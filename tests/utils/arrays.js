const arrSortNum = (arr, descending = false) => {
        return [...arr].sort((a, b) => (descending ? b - a : a - b));
};

const arrDeepSortAlpha = (arr) => {
        const arrCpy = [...arr];

        for (let i = 0; i < arrCpy.length; i++) {
                if (Array.isArray(arrCpy[i])) {
                        arrCpy[i] = arrDeepSortAlpha(arrCpy[i]);
                }
        }

        return arrCpy.sort((a, b) => {
                if (Array.isArray(a)) {
                        return a.length - b.length;
                }

                return a.localeCompare(b);
        });
};

export { arrSortNum, arrDeepSortAlpha };
