/* eslint-disable no-unused-vars */
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useLoaderData } from "react-router-dom";

const UpdateArt = () => {

    const arts = useLoaderData()
    console.log(arts)

    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = arts

    console.log(_id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url)

    const handleUpdateArt = event => {
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

        const newArt = { product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url }

        console.log(newArt)

        fetch(`http://localhost:5000/update_art/${_id}`, {
            method: 'PUT',
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

            })
    }

    return (
        <div>
            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-4xl text-center p-4">Update an art</h2>
                <form onSubmit={handleUpdateArt}>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Name</span>
                            <input type="text" name="product_name" placeholder="Enter Product Name" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Sub Category Name</span>
                            <select className='input input-bordered w-full input-success' name="sub_category_name" id="">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">B</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Price</span>
                            <input type="number" name="price" placeholder="Enter product Price" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Rating</span>
                            <input type="number" name="rating" placeholder="Enter product rating" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Customization</span>
                            <select className='input input-bordered w-full input-success' name="customization" id="">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Processing time</span>
                            <input type="time" name="processing_time" placeholder="Enter processing Time" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Stock Status</span>
                            <select className='input input-bordered w-full input-success' name="stock_status" id="">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Description</span>
                            <input type="text" name="description" placeholder="Enter short description" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">User Name</span>
                            <input type="text" name="user_name" placeholder="Enter user name" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Email</span>
                            <input type="email" name="user_email" placeholder="Enter email address" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control w-full p-4">
                            <span className="label-text">Photo url</span>
                            <input type="url" name="photo_url" placeholder="Enter Photo url" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#331A15] text-white input-success mb-8" type="submit" value="Update Art" />
                </form>
            </div>
        </div>
    );
};

export default UpdateArt;