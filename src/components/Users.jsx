import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";


const Users = () => {
    const loadedUser = useLoaderData();
    const [users,setUsers] = useState(loadedUser);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email Account</th>
                        <th>Account Creating Time</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                 
                 {
                    users.map(user => <User key={user._id}
                     user={user}
                     setUsers={setUsers}
                     users={users}
                    ></User>)
                 }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;