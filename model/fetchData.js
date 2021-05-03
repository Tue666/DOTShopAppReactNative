import { BASE_URL } from '../core/config';

export const FetchTopProducts = (type,number) => {
    return fetch(BASE_URL + type + '/' + number);
}
