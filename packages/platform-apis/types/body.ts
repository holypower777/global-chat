import { UserCommonAPI } from './user';

export interface UserCommonBody {
    body: UserCommonAPI;
}

export interface AuthBody {
    body: {
        user_id: number;
        refresh_token: string;
    }
}
