
import { useContext } from "react";
import { UserList } from "../components/UserList"
import { UserModalForm } from "../components/userModalForm";
import { UserContext } from "../context/UserContext";


export const UsersPage = () => {

const {
    users,
    visibleForm,


    handlerOpenForm,
} = useContext(UserContext);

    return (
        <>
            {!visibleForm ||
                <UserModalForm
                ></UserModalForm>
            }
            <div className="container my-4">
                <h2>Users App</h2>

                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>Nuevo usuario</button>}

                        {users.length === 0
                            ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                            :
                            <UserList
                            ></UserList>
                        }

                    </div>
                </div>

            </div>
        </>

    )
}