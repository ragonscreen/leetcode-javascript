const debug = (obj) => {
        console.log(
                JSON.stringify(obj)
                        .replace(/"/g, '')
                        .replace(/,/g, ', ')
                        .replace(/:/g, ': ')
                        .replace(/\{/g, '{ ')
                        .replace(/\}/g, ' }'),
        );
};

export { debug };
