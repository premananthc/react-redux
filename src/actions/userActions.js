import axios from "axios";

export function fetchUser() {
    return {
        type: "FETCH_USERS_FULFILLED",
        payload: {
            name: 'Prem',
            age: 30
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name
    }
}

export function setUSerAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age
    }
}

export function fetchUserDynamic() {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            dispatch({
                type: "FETCH_SUCCESS_DATA",
                payload: response
            })
        })
        .catch((err) => {
            dispatch({
                type: "FETCH_FAILED",
                payload: err
            })
        })
    }
}