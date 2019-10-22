import axios from 'axios'

declare namespace axios {
    export interface AxiosResponse<T = any> extends Promise<T> {}
}