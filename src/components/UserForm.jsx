import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForms = ({ userSelected,handlerCloseForm }) => {

    const {initialUserForm, handlerAddUser}= useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password:''
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        //para no refrescar la pagina
        event.preventDefault();
        //informacion del formulario
        if (!username || (!password && id === 0) || !email) {
            Swal.fire(
                "Error de validacion!!",
                'Debe competar los campos del formulario',
                'error'
            );
            return;
        }
        if(!email.includes('@')){
            Swal.fire(
                "Error de validadcion email",
                'El emaild ebe ser valido',
                'error'
            );
            return;   
        }
        //Guardar el user fomr en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);

    }
    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={onSubmit} action="">
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                type="text"
                value={username}
                onChange={onInputChange} />
            {id > 0 ? '' :
                <input
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onInputChange} />
            }

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                type="text"
                value={email}
                onChange={onInputChange} />
            <input type="hidden"
                name="id"
                value={id}
            />
            <button
                className="btn btn-success"
                type="submit"
            >
                {id > 0 ? 'Editar' : 'Crear'
                }
            </button>

            {!handlerCloseForm || <button className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}
            >Cerrar
            </button>}

        </form>
    )

}