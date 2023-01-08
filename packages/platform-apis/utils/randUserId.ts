import { randNumber } from '@ngneat/falso';

const randUserId = () => randNumber({ min: 42061870, max: 406654859 });

export default randUserId;
