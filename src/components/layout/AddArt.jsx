// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
const AddArt = () => {

    const handleAddCoffee = event => {
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

        // fetch('http://localhost:4000/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         Swal.fire({
        //             icon: "success",
        //             title: "Your work has been saved",
        //             showConfirmButton: false,
        //             timer: 2000
        //           });

        //     })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0]">
                <h2 className="text-4xl">Add a New Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    <div className="md:flex gap-4 mb-4 ">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Name</span>
                            <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Sub Category Name</span>
                            <input type="text" name="chef" placeholder="Enter Sub Category Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Price</span>
                            <input type="text" name="supplier" placeholder="Enter product Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Rating</span>
                            <input type="text" name="taste" placeholder="Enter product rating" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">customization</span>
                            <input type="text" name="category" placeholder="Enter customization Yes/No" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Processing time</span>
                            <input type="text" name="details" placeholder="Enter processing Time" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Stock Status</span>
                            <input type="text" name="category" placeholder="Enter Stock Status" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Description</span>
                            <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">User Name</span>
                            <input type="text" name="name" placeholder="Enter user name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Email</span>
                            <input type="email" name="email" placeholder="Enter email address" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4 ">
                        <div className="form-control w-full">
                            <span className="label-text">Photo url</span>
                            <input type="text" name="photo" placeholder="Enter Photo url" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#331A15] text-white mb-8" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddArt;