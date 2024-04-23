import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
       // console.log(coffee)
        //put coffee 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'update successfully successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }
    return (
        <div>
        <h3 className="text-4xl text-purple">Update Coffee</h3>
        <form onSubmit={handleUpdateCoffee} className="w-[80%] mx-auto bg-slate-100 p-4 rounded-sm">
            {/* first row */}
            <div className="flex gap-10">
                <div className="flex flex-col w-1/2">
                    <label className="label">
                      Coffee name
                    </label>
                    <input type="text" placeholder="coffee name" name="name" className="input" defaultValue={name} required />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="label">
                      Available quantity
                    </label>
                    <input type="text" placeholder="Quantity" className="input" name="quantity" defaultValue={quantity} required />
                </div>
            </div>
            {/* second row */}
            <div className="flex gap-10">
                <div className="flex flex-col w-1/2">
                    <label className="label">
                     Supplier
                    </label>
                    <input type="text" placeholder="Supplier Name" name="supplier" className="input" defaultValue={supplier}  required />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="label">
                      Taste
                    </label>
                    <input type="text" placeholder="Taste" className="input" defaultValue={taste} name="taste" required />
                </div>
            </div>
            {/* Third row */}
            <div className="flex gap-10">
                <div className="flex flex-col w-1/2">
                    <label className="label">
                      Category
                    </label>
                    <input type="text" placeholder="Category" name="category" defaultValue={category} className="input" required />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="label">
                      Details
                    </label>
                    <input type="text" placeholder="Details" className="input" defaultValue={details} name="details" required />
                </div>
            </div>
            {/* Third row */}
            <div className="flex gap-10">
                <div className="flex flex-col w-full">
                    <label className="label">
                      Photo Url
                    </label>
                    <input type="text" placeholder=" Photo Url" className="input" defaultValue={photo} name="photo" required />
                </div>
            </div>
            <input type="submit" value='Update Coffee' className="btn btn-block mt-3 " />
        </form>
    </div>
    );
};

export default UpdateCoffee;