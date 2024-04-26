/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";
// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const UpdateArt = () => {

    // const coffee = useLoaderData()
    // const { _id, name, chef, supplier, taste, category, details, photoUrl } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photoUrl }
        console.log(newCoffee)

        // fetch(`http://localhost:4000/coffee/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         Swal.fire({
        //             title: "Do you want to save the changes?",
        //             showDenyButton: true,
        //             showCancelButton: true,
        //             confirmButtonText: "Save",
        //             denyButtonText: `Don't save`
        //         }).then((result) => {
        //             /* Read more about isConfirmed, isDenied below */
        //             if (result.isConfirmed) {
        //                 Swal.fire("Saved!", "", "success");
        //             } else if (result.isDenied) {
        //                 Swal.fire("Changes are not saved", "", "info");
        //             }
        //         });

        //     })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0]">
                <h2 className="text-4xl">Update Art</h2>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="md:flex gap-4 mb-8 ">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Name</span>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Chef</span>
                            <input type="text" name="chef"  placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-8">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Supplier</span>
                            <input type="text" name="supplier"  placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Taste</span>
                            <input type="text" name="taste"  placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-8">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Category</span>
                            <input type="text" name="category"  placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Details</span>
                            <input type="text" name="details" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-8 ">
                        <div className="form-control w-full">
                            <span className="label-text">Photo</span>
                            <input type="text" name="photoUrl"  placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#331A15] mb-8" type="submit" value="Update Art" />
                </form>
            </div>
        </div>
    );
};

export default UpdateArt;