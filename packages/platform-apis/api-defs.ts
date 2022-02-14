export const baseUrl = process.env.NODE_ENV 
    ? 'http://127.0.0.1:8080/api/v1/'
    : '/api/v1/';
export const getMessagesByNameDef = (username: string) => `messages/${username}`;
