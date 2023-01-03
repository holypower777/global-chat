export interface AccessToken {
    user_id: number;
    display_name: string;
    dontation_tier: 0 | 1 | 2 | 3 | 4;
    dontation_exp: number;
    exp: number;
}
