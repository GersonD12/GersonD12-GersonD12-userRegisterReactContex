import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const useAuth = () =>{
    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = ({ username, password }) => {
        if (username === 'asdf' && password === 'asdf') {
            const user = { username: 'asdf' }
            dispatch({
                type: 'login',
                payload: user
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
            navigate('/users');
        } else {
            Swal.fire('Error de validacion', ' Usuario o contraseña invlaidos');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        })
        sessionStorage.removeItem('login');
    }
    return{
        login,
        handlerLogin,
        handlerLogout
    }
}