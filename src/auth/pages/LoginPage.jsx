import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialForms = {
    username: '',
    password: ''
}

export const LoginPage = () => {
     const {handlerLogin} = useContext(AuthContext); 

    const [loginForm, setLoginForm] = useState(initialForms);
    const { username, password } = loginForm;

    const onInputChage = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', ' Usuario y contraseña requeridos');
        }
        handlerLogin({ username, password });

        setLoginForm(initialForms);
    }

    return (
        <div className="modal" style={{ display: "block" }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>

                    </div>
                    <form action="" onSubmit={onSubmit}>


                        <div className="modal-body">
                            <input type="text"
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onInputChage}
                                id="username"
                            />
                            <input type="password"
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onInputChage}
                                id="password"
                            />

                        </div>
                        <div className="modal-footer">

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Save changes</button>

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>



                    </form>
                    <label>Usuario: asdf</label>
                    <label>Constraseña: asdf</label>


                </div>
            </div>

        </div>

    );
}