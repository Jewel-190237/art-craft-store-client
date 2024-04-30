/* eslint-disable no-unused-vars */
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateArt = () => {

    const arts = useLoaderData()
    const navigate = useNavigate()

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


        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
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
                    })
                Swal.fire("Saved!", "", "success");
                navigate('/myCurt')
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });


    }

    return (
        <div>
            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-3xl text-center p-4 text-green-600 font-bold">Update: {product_name}</h2>
                <form onSubmit={handleUpdateArt}>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Name</span>
                            <input type="text" name="product_name" defaultValue={product_name} className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Sub Category Name</span>
                            <select className='input input-bordered w-full input-success' defaultValue={sub_category_name} name="sub_category_name" id="">
                                <option value="Clay-made pottery">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Price</span>
                            <input type="number" defaultValue={price} name="price" placeholder="Enter product Price" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Rating</span>
                            <input type="number" name="rating" defaultValue={rating} placeholder="Enter product rating" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Customization</span>
                            <select className='input input-bordered w-full input-success' name="customization" defaultValue={customization} id="">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Processing time</span>
                            <input type="time" name="processing_time" defaultValue={processing_time} placeholder="Enter processing Time" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Stock Status</span>
                            <select className='input input-bordered w-full input-success' name="stock_status" defaultValue={stock_status} id="">
                                <option value="In Stock">In Stock</option>
                                <option value="Stock Out">Stock Out</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Description</span>
                            <input type="text" name="description" defaultValue={description} className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">User Name</span>
                            <input type="text" name="user_name" defaultValue={user_name} placeholder="Enter user name" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text">Email</span>
                            <input type="email" name="user_email" defaultValue={user_email} className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div className="form-control w-full p-4">
                            <span className="label-text">Photo url</span>
                            <input type="url" name="photo_url" defaultValue={photo_url} className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#331A15] text-white input-success mb-8" type="submit" value="Update Art" />
                </form>
            </div>
        </div>
    );
};

export default UpdateArt;