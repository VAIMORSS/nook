import { ApiType } from './api';
import { JokeType } from './joke';

export interface MainType {
    api: ApiType;
    joke: JokeType;
}

export * from './api';
export * from './joke';