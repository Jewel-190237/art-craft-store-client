/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ArtCard = ({ art }) => {

    
    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {product_name}
                    </h2>
                    <p className="text-green-600 text-xl mb-4 font-semibold">Price: <span className="font-semibold ml-5"> ${price}</span></p>
                    <hr />
                    <div className="card-actions justify-between ">
                        <div className="badge outline outline-green-400 p-4">Rating: <span className="font-bold ml-5">{rating}</span></div>
                        <div className="badge outline outline-green-400 p-4">Stock Status: <span className="font-bold ml-5">{stock_status}</span> </div>
                    </div>
                    <hr />
                    <p className="text-green-600 text-xl font-bold">Product Details: </p>
                    <p className="text-green-600">Sub Category: <span className="font-bold ml-5">{sub_category_name}</span></p>
                    <p className="text-green-600">Processing Time: <span className="font-bold ml-5">{processing_time}</span></p>
                    <p className="text-green-600">Customization: <span className="font-bold ml-5">{customization}</span></p>
                    <hr />
                    <Link to={`/artDetails/${_id}`}>
                        <button className="btn btn-block bg-green-700 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;