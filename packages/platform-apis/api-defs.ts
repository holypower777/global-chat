export const baseUrl = process.env.NODE_ENV 
    ? 'http://192.168.1.12:8080/api/v1/'
    : '/api/v1/';
export const getMessagesByNameDef = (username: string) => `messages/${username}`;
