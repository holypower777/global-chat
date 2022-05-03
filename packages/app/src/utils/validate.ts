import { SEARCH_TYPE } from 'platform-components/src/components/constants';

const usernameRegexp = new RegExp(/^[\w]{0,25}$/);
const usernameSubmitRegexp = new RegExp(/^[a-zA-Z0-9][\w]{3,25}$/);
const userIdRegexp = new RegExp(/^[0-9]{0,20}$/);
const userIdSubmitRegexp = new RegExp(/^[0-9]{1,20}$/);

export const isValidSearchSubmit = (userType: SEARCH_TYPE, value: string | undefined) => {
    if (value === undefined) {
        return false;
    }

    if (!value.match(userType === SEARCH_TYPE.USERNAME ? usernameSubmitRegexp : userIdSubmitRegexp)) {
        return false;
    }

    return true;
};

export const isValidSearchChange = (userType: SEARCH_TYPE, value: string | undefined) => {
    if (value === undefined) {
        return false;
    }

    if (!value.match(userType === SEARCH_TYPE.USERNAME ? usernameRegexp : userIdRegexp)) {
        return false;
    }

    return true;
};
