export enum TEXT_SIZE {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export enum TEXT_WEIGHT {
    S = 's',
    M = 'm',
    L = 'l',
}

export enum TEXT_TAG {
    LI = 'li',
    SPAN = 'span',
}

export enum CHIP_TAG {
    LI = 'li',
    DIV = 'div',
}

export enum HEADER_TEXT_SIZE {
    S = 's',
    M = 'm',
    L = 'l',
}

export enum SPIN_THEMES {
    TWITCH = 'twitch',
    BLACK = 'black',
    WHITE = 'white',
}

export enum SPIN_SIZES {
    S = 's',
    M = 'm',
    L = 'l',
}

export enum TOOLTIP_DIRECTION {
    left = 'left',
    right = 'right',
    bottom = 'bottom',
    top = 'top',
}

export enum POPUP_DIRECTION {
    left = 'left',
    right = 'right',
}

export enum TOOLTIP_THEME {
    light = 'light',
    dark = 'dark',
}

export enum SNACKBAR_TYPE {
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
    SUCCESS = 'success',
    TWITCH = 'twitch',
}

export enum SNACKBAR_DIRECTION {
    TOP_LEFT = 'top-left',
    TOP_CENTER = 'top-center',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_CENTER = 'bottom-center',
    BOTTOM_RIGHT = 'bottom-right',
}

export enum NOTIFICATIONS_DIRECTION {
    TOP_LEFT = 'top-left',
    TOP_CENTER = 'top-center',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_CENTER = 'bottom-center',
    BOTTOM_RIGHT = 'bottom-right',
}

export enum NOTIFICATIONS_DURATION {
    S = 4000,
    M = 6000,
    L = 8000,
}

export enum LINKS {
    LIVE_CHAT = '/live-chat',
    OVERALL_STATS = '/overall-stats',
    MESSAGES = '/messages',
    HOME = '/',
    BOOSTY = 'https://boosty.to/holypower77',
    GITHUB = 'https://github.com/holypower777/global-chat',
    BUG_REPORT = 'https://github.com/holypower777/global-chat/issues/new/choose',
    IDEAS = 'https://github.com/holypower777/global-chat/discussions',
    KOSTI4EG_TWITCH = 'https://www.twitch.tv/kosti4eg',
    AUTH = 'https://global-chat.ru/auth/twitch/login',
    AUTH_DEV = 'http://localhost:3000/auth/twitch/login',
    
}

export enum DESK_CARD_TYPE {
    OVERALL = 'overall',
    LIVE_CHAT = 'live-chat',
    DONATION = 'donation',
    USER = 'user',
}

export enum SIZE {
    S = 's',
    M = 'm',
    L = 'l',
}

export enum THEME {
    light = 'light',
    dark = 'dark',
}

export enum SEARCH_TYPE {
    USERNAME = 'username',
    USER_ID = 'user_id',
}

export enum SETTINGS {
    SORT_BY_DATE = 'sortByDate',
    SHOW_BADGES = 'showBadges',
    SHOW_MESSAGE_TIME = 'showMessageTime',
    USER_TYPE = 'userType',
    LIVE_CHAT_SHOW_BADGES = 'liveChatShowBadges',
    LIVE_CHAT_SHOW_MESSAGE_TIME = 'liveChatShowMessageTime',
    LIVE_CHAT_USE_CHAT_COLORS = 'liveChatUseChatColors',
    LANGUAGE = 'language',
    ACCESS_TOKEN = 'at',
    REFRESH_TOKEN = 'rt',
}

export enum SORT_ORDER {
    ASC = 'asc',
    DESC = 'desc',
}

export enum LANGUAGES {
    ENG = 'en-US',
    RU = 'ru-RU',
}

export enum FROM_PAGE {
    RANDOM_USER = 'randomUser',
}

export enum SEARCH_PARAMS {
    FROM = 'from',
    REPLY = 'reply',
    ACCESS_TOKEN = 'at',
    REFRESH_TOKEN = 'rt',
}

export interface REPLY_MESSAGE {
    channelId: number;
    messageId: string;
    index: number;
}

export const MONTHS = [
    'january', 
    'february', 
    'march', 
    'april', 
    'may', 
    'june', 
    'july', 
    'august', 
    'september', 
    'october', 
    'november', 
    'december',
];

export const DAYS_OF_THE_WEEK = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];

export const DAYS_IN_WEEK = 7;
export const SECONDS_IN_ONE_DAY = 86400;
export const WEEK_IN_ONE_YEAR = 52;
