/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const handleDelete = _id => {
    console.log(_id)
    fetch(`http://localhost:5000/delete/${_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

            // const remaining = coffees.filter(cof => cof._id !== _id)
            // setCoffees(remaining)
        })
}


const MyCurtDetails = ({ art }) => {

    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art;
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Rating: {rating}</div>
                        <div className="badge badge-outline">Stock Status: {stock_status}</div>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <Link to={`/UpdateArt/${_id}`} className="btn btn-outline w-1/2 my-2 ">
                            <button className="flex gap-4">
                                <GrUpdate></GrUpdate>
                                Update
                            </button>
                        </Link>
                        <Link className="btn btn-outline w-1/2 my-2">
                            <button onClick={() => handleDelete(_id)} className="flex gap-4">
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