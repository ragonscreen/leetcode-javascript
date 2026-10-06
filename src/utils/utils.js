const debug = (obj) => {
        console.log(
                JSON.stringify(obj)
                        .replaceAll('"', '')
                        .replaceAll(',', ', ')
                        .replaceAll(':', ': ')
                        .replaceAll('{', '{ ')
                        .replaceAll('}', ' }'),
        );
};

export { debug };
