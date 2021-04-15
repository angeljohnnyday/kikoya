const data = {
    modulos: [],
    logged: false
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const user = (state = data, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, ...action.payload }
        case LOGOUT:
            return data;
        default:
            return state;
    }
}

export const login = data => dispatch => {
    dispatch({
        type: LOGIN,
        payload: data
    });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
}

export default user