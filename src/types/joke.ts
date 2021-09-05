
import { ApiType, responseType } from './api';


export interface JokeType {
    //props
    api: ApiType;
    url: string;
    // authenticate
    getJoke: () => Promise<responseType>;
}

export interface JokeDataType {
    id: number;
    punchline: string;
    setup: string;
    type: string;
}