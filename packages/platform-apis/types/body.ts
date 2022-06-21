import { UserCommon } from './user';

export interface UserCommonBody {
    body: UserCommon;
}

export interface AuthBody {
    body: {
        user_id: number;
        refresh_token: string;
    }
}
