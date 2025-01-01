import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {


    const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

    const handleDelete = async (_id) => {

        console.log(_id);

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


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ _id })
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees);

                        }

                    })
            }
        });

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} /></figure>
            <div className="flex w-full pr-4 justify-between">
                <div className="m-4">
                    <h2 className="card-title">{name}</h2>
                    <p>Details:{details}</p>
                    <p>taste: {taste}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="join join-vertical space-y-4 m-2">
                        <button className="btn btn-warning font-bold">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-warning font-bold">Edit</button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn btn-warning font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;