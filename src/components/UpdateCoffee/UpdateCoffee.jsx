import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, supplier, category, chef, taste, details, photo };
        console.log(updateCoffee);




        // send the newCoffee data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="h-screen p-6 bg-[#EFEBDF]">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Coffee : {name}</h2>

            <form onSubmit={handleUpdateCoffee} className='p-6 rounded-lg'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-4">
                        <label className="form-control w-full gap-2">
                            <span className="label-text">Coffee Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Supplier</span>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Supplier" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Category</span>
                            <input type="text" name="category" defaultValue={category} placeholder="Type Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-4">
                        <label className="form-control w-full gap-2">
                            <span className="label-text">Coffee Chef</span>
                            <input type="text" name="chef" defaultValue={chef} placeholder="Enter chef Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Taste</span>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Type Taste" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Details</span>
                            <input type="text" name="details" defaultValue={details} placeholder="Type Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Single Input Field */}
                <div className="mt-4">
                    <label className="form-control w-full gap-2">
                        <span className="label-text">Photo</span>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button type="submit" className="btn btn-warning font-bold p-2 rounded-lg w-full block">Update Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;