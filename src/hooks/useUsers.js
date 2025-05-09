import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
//retorna un objeto
const initialUser = [
    {
        id: 1,
        username: 'pepe',
        password: '1234',
        email: 'pepe@correo.com'
    }
]
const initialUserForm =
{
    id: 0,
    username: '',
    password: '',
    email: '',
}
export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUser);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate= useNavigate();
    const handlerAddUser = (user) => {

        dispatch({
            type: (user.id === 0) ? 'addUser': 'updateUser',
            payload: user
        });
        Swal.fire(
            (user.id === 0) ?
                'Usuiro creado' :
                'Usuario Actualizado',
            (user.id === 0) ?
                'El usuario ha sido creado con exito!' :
                'El usurio ha sido actualizado con exito!',
            'success'
        );
        handlerCloseForm();
        navigate('/users');
    }
    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: "Está seguro que desea eliminar?",
            text: "Cuidado el usuario sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                });
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El usuario ha sido eliminado con exito.",
                    icon: "success"
                });
            }
        });
    }
    const handlerUserSelectedForm = (user) => {
        //Para que quede lo mas inmutablemente posbible
        setVisibleForm(true);
        setUserSelected({ ...user });
    }
    const handlerOpenForm = () =>{
        setVisibleForm(true)
    }
    const handlerCloseForm = () =>{
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }
}