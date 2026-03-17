const arrDeepSort = (arr, type = 'number', descending = false) => {
        return [...arr]
                .map((e) => (Array.isArray(e) ? arrDeepSort(e, type) : e))
                .sort((a, b) => {
                        if (Array.isArray(a) && Array.isArray(b)) {
                                return a.length - b.length;
                        }

                        if (!(Array.isArray(a) || Array.isArray(b))) {
                                if (type === 'string') {
                                        return descending
                                                ? b.localeCompare(a)
                                                : a.localeCompare(b);
                                }

                                return descending ? b - a : a - b;
                        }

                        return Array.isArray(a) ? 1 : -1;
                });
};

export { arrDeepSort };
