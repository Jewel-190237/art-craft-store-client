/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import UseTitle from "./UseTitle";




const MyCurtDetails = ({ art, arts, setArts }) => {
    UseTitle('My Curt Details')

    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art;


    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this Art",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = arts.filter(art => art._id !== _id)
                        setArts(remaining)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }



    return (
        <div className="">
            <div className="card bg-slate-100 shadow-xl mb-4 p-4">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {product_name}
                    </h2>
                    <p className="text-green-600 text-xl font-bold mb-4">Price: <span className="font-bold ml-5"> ${price} </span> </p>
                    <hr />
                    <div className="card-actions justify-between ">
                        <div className="badge outline outline-green-400 p-4">Rating:<span className="font-bold ml-2"> {rating} </span> </div>
                        <div className="badge outline outline-green-400 p-4">Stock Status: {stock_status}</div>
                    </div>
                    <hr />
                    <p className="text-green-600 text-xl font-bold">Product Details: </p>
                    <p className="text-green-600">Sub Category: <span className="font-bold ml-5"> {sub_category_name} </span> </p>
                    <p className="text-green-600">Processing Time: <span className="font-bold ml-5"> {processing_time} </span></p>
                    <p className="text-green-600">Customization: <span className="font-bold ml-5"> {customization} </span> </p>
                    <hr />
                    <div className="flex gap-2 justify-between">
                        <Link to={`/UpdateArt/${_id}`} className="btn btn-outline w-1/2 my-2 ">
                            <button className="flex gap-4 text-green-600">
                                <GrUpdate></GrUpdate>
                                Update
                            </button>
                        </Link>
                        <Link className="btn btn-outline w-1/2 my-2">
                            <button onClick={() => handleDelete(_id)} className="flex gap-4 text-green-600">
                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                Delete
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCurtDetails;