

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, supplier, category, chef, taste, details, photo};
        console.log(newCoffee);

    }

    return (
        <div className="p-6 bg-[#EFEBDF]">
            <h2 className="text-2xl font-bold mb-4 text-center">Add a Coffee</h2>

            <form onSubmit={handleAddCoffee} className='p-6 rounded-lg'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-4">
                        <label className="form-control w-full gap-2">
                            <span className="label-text">Coffee Name</span>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Supplier</span>
                            <input type="text" name="supplier" placeholder="Enter Supplier" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Category</span>
                            <input type="text" name="category" placeholder="Type Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-4">
                        <label className="form-control w-full gap-2">
                            <span className="label-text">Coffee Chef</span>
                            <input type="text" name="chef" placeholder="Enter chef Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Taste</span>
                            <input type="text" name="taste" placeholder="Type Taste" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full gap-2">
                            <span className="label-text">Details</span>
                            <input type="text" name="details" placeholder="Type Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Single Input Field */}
                <div className="mt-4">
                    <label className="form-control w-full gap-2">
                        <span className="label-text">Photo</span>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button type="submit" className="bg-[#D2B48C] font-bold p-2 rounded-lg w-full block">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
