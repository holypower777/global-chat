const isArrayEqual = (a: Array<unknown>, b: Array<unknown>) => {
    let i = a.length;
    if (i !== b.length) {
        return false;
    }

    // eslint-disable-next-line no-cond-assign
    while (i -= 1) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
};

export default isArrayEqual;
