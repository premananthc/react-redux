export default function reducer(state = {
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    console.log("action is: ", action.type);
    switch (action.type) {
        case "FETCH_USERS":
            {
                console.log("FETCH_USER");
                return { ...state,
                    fetching: true
                }
            }
        case "FETCH_USERS_REJECTED":
            {
                console.log("FETCH_USER_REJECTED");
                return { ...state,
                    fetching: false,
                    error: action.payload
                }
            }
        case "FETCH_USERS_FULFILLED":
            {
                console.log("FETCH_USERS_FULFILLED");
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    user: action.payload,
                }
            }
        case "SET_USER_NAME":
            {
                return {
                    ...state,
                    user: { ...state.user,
                        name: action.payload
                    },
                }
            }
        case "SET_USER_AGE":
            {
                return {
                    ...state,
                    user: { ...state.user,
                        age: action.payload
                    },
                }
            }
        default:
        {
            console.log("Default");
            
        }
    }

    return state
}