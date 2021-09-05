export interface ApiType {
    baseUrl: string;

    get: (url: string) => Promise<responseType>;
    extractError: (response: responseType) => any;
    post: (url: string, payload: any) => Promise<responseType>;
}

export type responseType = {
    data?: any;
    error?: any;
};