import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const loadedUser = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email Account</th>
                        <th>Account Creating Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                 
                 {
                    loadedUser.map(user => <User key={user._id}
                     user={user}
                    ></User>)
                 }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;