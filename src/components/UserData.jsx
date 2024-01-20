import { Person } from "./Person";

import { useSelector } from "react-redux";

function UserData() {
    const persons = useSelector(state => state.users.users)

    if(!persons || persons.length === 0) return <p>Нет данных</p>;
    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Adress</th>
                            <th>DEL User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((user, i) => (<Person person={user} key={user.id} index={i}/>))}
                    </tbody>
                </table>
            </div>

        </>
    )
    
}
export default UserData