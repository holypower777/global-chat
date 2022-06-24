export interface BackendErrorResponse {
    error: {
        intlId: string;
        message: string;
        status: number;
    }
}

export interface ErrorResponse {
    error: {
        data: BackendErrorResponse;
        status: number;
    },
    isUnhandledError: boolean;
    meta: unknown;
}
