
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
const User = ({ user ,users,setUsers }) => {
    console.log(users)
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                             Swal.fire({
                               title: "Deleted!",
                               text: "Your file has been deleted.",
                               icon: "success"
                             });
                             const ramaining = users.filter(use => use._id !== id);
                             setUsers(ramaining)
                        }
                    })
            }
        });
    }
    return (
        <tr>
            <th></th>
            <td>{user.email}</td>
            <td>{user?.createdAt}</td>
            <td><button onClick={() => handleDelete(user._id)} className='btn'>X</button></td>

        </tr>
    );
};
User.propTypes = {
    user: PropTypes.object
}
export default User;