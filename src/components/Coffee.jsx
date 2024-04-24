import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ newCoffee }) => {
    const { _id, name, quantity, supplier, photo } = newCoffee;

    const handleDelete = _id => {
        console.log(_id)
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

                //console.log('delete successful')
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            //   const remaining = coffee.filter(coff => coff._id !== _id);
                            //   setCoffee(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="flex  bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album" className='w-[80%]' /></figure>
            <div className="flex justify-between border-red-100 border-1 w-full">
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <h2 className="font-bold">{quantity}</h2>
                    <h2 className="font-bold">{supplier}</h2>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical">
                        <button className="btn join-item">view</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Update</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Coffee.propTypes = {
    newCoffee: PropTypes.object,
    // coffee:PropTypes.array
}
export default Coffee;