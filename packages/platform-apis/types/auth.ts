export interface AccessToken {
    user_id: number;
    display_name: string;
    paid_tier: 0 | 1 | 2 | 3 | 4;
    paid_exp: number;
    exp: number;
}
