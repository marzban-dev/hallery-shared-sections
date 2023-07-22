const removeUndefined = (obj: Record<any, any> | undefined) => {
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if (obj[key] === undefined) {
                delete obj[key];
            }
        });
    }
};

export default removeUndefined;
