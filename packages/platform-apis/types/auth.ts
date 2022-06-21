interface TokenResponseAPI {
    access_token: string;
    refresh_token: string;
}

export interface TokenResponse {
    accessToken: string,
    refreshToken: string;
}

export const convertTokenResponseApi = (tkn: TokenResponseAPI): TokenResponse => ({
    accessToken: tkn.access_token,
    refreshToken: tkn.refresh_token,
});
