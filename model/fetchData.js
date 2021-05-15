import { BASE_URL } from '../core/config';

export const Login = (userName, passWord) => {
    return fetch(BASE_URL + 'Login', {
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

export const getUser = (token) => {
    return fetch(BASE_URL + 'User', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const editUser = (token, name, phone, email, address) => {
    return fetch(BASE_URL + 'EditUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            Name: name,
            Phone: phone,
            Email: email,
            Address: address
        })
    });
}

export const loadPurchased = (token) => {
    return fetch(BASE_URL + 'Purchased', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const loadCart = (token) => {
    return fetch(BASE_URL + 'ListCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const addCart = (token, productID, quantity) => {
    return fetch(BASE_URL + 'AddCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID,
            Quantity: quantity
        })
    });
}

export const editQuantityCart = (token,productID,newQuantity) => {
    return fetch(BASE_URL + 'EditQuantityCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID,
            NewQuantity: newQuantity
        })
    });
}

export const removeItem = (token, productID) => {
    return fetch(BASE_URL + 'RemoveItem', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID
        })
    });
}

export const clearCart = (token) => {
    return fetch(BASE_URL + 'ClearCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const countCartItem = (token) => {
    return fetch(BASE_URL + 'CountCartItem', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const checkOut = (token,name,email,phone,address) => {
    return fetch(BASE_URL + 'CheckOut', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            Name: name,
            Email: email,
            Phone: phone,
            Address: address
        })
    });
}

export const FetchTopProducts = (type, number) => {
    return fetch(BASE_URL + type + '/' + number);
}

export const FetchRelatedProducts = (productID) => {
    return fetch(BASE_URL + 'Related/' + productID);
}

export const FetchListCate = () => {
    return fetch(BASE_URL + 'ListCate');
}

export const FetchProductsByCate = (cateID) => {
    return fetch(BASE_URL + 'ProductsByCate/' + cateID);
}