const usernameRegex = /^([a-zA-Z0-9]\w{0,24})$/;

export const clearMismatchedChars = (value: string) => value.replace(/[\W]+/g, '');
export const containsDisplayName = (value: string) => usernameRegex.test(value);
export const adjustDisplayName = (value: string) => {
    if (containsDisplayName(value)) {
        return value.replace(/^_+/, '').match(usernameRegex)?.[0] || value;
    }
    return value;
};
