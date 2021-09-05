
import Axios from 'axios';
import { ApiType, responseType } from '../../types';


export default class Api implements ApiType {
    baseUrl = "http://localhost:4000/api/v1";

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;

    }

    async get(url: string) {
        try {
            const response = await Axios.get(url);
            const error = this.extractError(response);
            return { data: response.data, error: error };
        } catch (e) {
            return { error: e };
        }
    }

    extractError(response: responseType) {
        if (response.error) {
            return response.error;
        }
        return null;
    }

    async post(url: string, payload: any) {
        try {
            const response = await Axios.post(url, payload, { withCredentials: true, });
            const error = this.extractError(response);
            return { data: response.data, error: error };
        } catch (e) {
            return { error: e };
        }
    }
}


