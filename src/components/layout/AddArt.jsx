import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddArt = () => {

    const navigate = useNavigate()

    const  { user } = useContext(authContext);

    const email = user.email;

    console.log(email)
    
    const handleAddArt = event => {
        event.preventDefault()
        const form = event.target;

        const product_name = form.product_name.value;
        const sub_category_name = form.sub_category_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const description = form.description.value;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const photo_url = form.photo_url.value;

        const newArt = { email, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url }
        console.log(newArt)

        fetch('http://localhost:5000/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Art Added Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });

                  navigate('/myCurt')

            })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-4xl text-center p-4">Add a New Coffee</h2>
                <form onSubmit={handleAddArt}>
                    <div className="md:flex gap-4 mb-4 ">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Name</span>
                            <input type="text" name="product_name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Sub Category Name</span>
                            <input type="text" name="sub_category_name" placeholder="Enter Sub Category Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Price</span>
                            <input type="number" name="price" placeholder="Enter product Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Rating</span>
                            <input type="number" name="rating" placeholder="Enter product rating" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">customization</span>
                            <input type="text" name="customization" placeholder="Enter customization Yes/No" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Processing time</span>
                            <input type="text" name="processing_time" placeholder="Enter processing Time" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Stock Status</span>
                            <select className='input input-bordered w-full' name="stock_status" id="">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {/* <input type="text" placeholder="Enter Stock Status" className="" /> */}
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Description</span>
                            <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <span className="label-text">User Name</span>
                            <input type="text" name="user_name" placeholder="Enter user name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <span className="label-text">Email</span>
                            <input type="email" name="user_email" placeholder="Enter email address" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 mb-4 ">
                        <div className="form-control w-full">
                            <span className="label-text">Photo url</span>
                            <input type="text" name="photo_url" placeholder="Enter Photo url" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#331A15] text-white mb-8" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddArt;