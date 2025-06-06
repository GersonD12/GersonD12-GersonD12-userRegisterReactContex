import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserRow } from "./UserRow"

export const UserList = () => {
    const { users } = useContext(UserContext);
    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>update</th>
                        <th>update2 route</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id, username, email} )=> (
                            <UserRow 
                            key={id} 
                            id={id} 
                            username={username} 
                            email={email} 
                            ></UserRow>
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}