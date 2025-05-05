import { useContext } from "react";
import { UserForms } from "./UserForm"
import { UserContext } from "../context/UserContext";

export const UserModalForm = () => {
    const { userSelected, handlerCloseForm } = useContext(UserContext);
    return (<div className=" abrir-modal animacion fadeIn ">
        <div className="modal" style={{ display: "block" }} tabIndex={-1}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {userSelected.id > 0 ? 'Editar' : 'Crear'}
                        </h5>
                    </div>
                    <div className="modal-body">
                        {/* Formulario de ingreso de nuevo usuario, pero es literalmente los espacios */}
                        {/* Contiene en el UerForms el boton de cerrar el modal porque si estubiera aqui afuera, dependiendo 100% del modal quedaria abajo el boton y no se viera bien */}
                        <UserForms
                            /*                             initialUserForm={initialUserForm}  Se quita porque ya esta en el contexto superior*/
                            userSelected={userSelected}
                            /* handlerAddUser={handlerAddUser} Se quieta porque ya esta en el contexto superior */
                            handlerCloseForm={handlerCloseForm}
                        ></UserForms>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}