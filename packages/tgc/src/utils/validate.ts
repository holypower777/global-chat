const usernameRegex = /([a-zA-Z0-9]\w{2,24})/;
const usernameRegexp = new RegExp(/^[\w]{0,25}$/);
const usernameSubmitRegexp = new RegExp(/^[a-zA-Z0-9][\w]{2,25}$/);
// const userIdRegexp = new RegExp(/^[0-9]{0,20}$/);
// const userIdSubmitRegexp = new RegExp(/^[0-9]{1,20}$/);

export const isValidSearchSubmit = (value: string | undefined) => {
    if (value === undefined) {
        return false;
    }

    return value.match(usernameSubmitRegexp);
};

export const isValidSearchChange = (value: string | undefined) => {
    if (value === undefined) {
        return false;
    }

    return value.match(usernameRegexp);
};

export const extractValidDisplayName = (value: string) => {
    if (usernameRegex.test(value)) {
        return value.match(usernameRegex)![0];
    }
};
