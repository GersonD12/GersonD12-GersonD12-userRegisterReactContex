import { useContext, useEffect, useState } from "react"
import { UserForms } from "../components/UserForm"
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export const RegisterPage = () => {

    const {users =[], initialUserForm} = useContext(UserContext);
    const [userSelected, setUserSeleted] = useState(initialUserForm);

    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSeleted(user);
        }

    }, [id])
    return (
        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registrar'}</h4>
            <div className="row">
                <div className="col">
                    <UserForms
                        userSelected={userSelected}
                    >
                    </UserForms>
                </div>
            </div>
        </div>
    )
}