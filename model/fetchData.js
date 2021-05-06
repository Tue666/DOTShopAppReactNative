import { BASE_URL } from '../core/config';

export const Login = (userName,passWord) => {
    return fetch(BASE_URL + 'Login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserName: userName,
            PassWord: passWord
        })
    });
}

export const FetchTopProducts = (type,number) => {
    return fetch(BASE_URL + type + '/' + number);
}

export const FetchRelatedProducts = (cateID) => {
    return fetch(BASE_URL + 'Related/' + cateID);
}

export const FetchListCate = () => {
    return fetch(BASE_URL + 'ListCate');
}

export const FetchProductsByCate = (cateID) => {
    return fetch(BASE_URL + 'ProductsByCate/' + cateID);
}