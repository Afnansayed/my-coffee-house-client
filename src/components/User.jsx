
import PropTypes from 'prop-types'
const User = ({user}) => {
    return (
               <tr>
                        <th></th>
                        <td>{user.email}</td>
                        <td>{user?.createdAt}</td>
                       
              </tr>
    );
};
User.propTypes={
    user:PropTypes.object
}
export default User;