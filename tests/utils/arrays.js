const arrSortNum = (arr, descending = false) => {
        return [...arr].sort((a, b) => (descending ? b - a : a - b));
};

export { arrSortNum };
