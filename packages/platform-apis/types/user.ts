export interface TwitchUserAPI {
    broadcaster_type: 'partner' | 'affiliate' | '';
    created_at: string;
    description: string;
    display_name: string;
    login: string;
    offline_image_url: string;
    profile_image_url: string;
    type: 'staff' | 'admin' | 'global_mod' | '';
    user_id: TwitchUserId;
    view_count: number;
}

export type TwitchUserId = number;
