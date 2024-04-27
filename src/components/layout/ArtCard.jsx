/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ArtCard = ({ art }) => {
    
    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
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
                    <Link to={`/artDetails/${_id}`}>
                        <button className="btn btn-block bg-green-700 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;