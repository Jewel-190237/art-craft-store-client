/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ArtCard = ({art}) => {
    const {_id} = art;
    const { product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                    <button className="btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;