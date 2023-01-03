import { randFirstName, randLastName, randBoolean, randNumber } from '@ngneat/falso';

const randDisplayName = () => {
    const firstName = randFirstName({ withAccents: false });
    const lastName = randLastName({ withAccents: false });
    let userName = `${firstName}_${lastName}`;

    if (randBoolean()) {
        userName += randNumber({ min: 0, max: 100 });
    }
    return userName;
};

export default randDisplayName;
