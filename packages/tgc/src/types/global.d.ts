export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            FLAGSMITH_API_KEY: string;
        }
    }
}
