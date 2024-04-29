/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllArts = () => {

    const loadedArts = useLoaderData();
    const [arts, setArts] = useState(loadedArts);

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center text-green-700 m-5">All Arts and Crafts</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Explore a vibrant world of creativity with our diverse collection of arts and crafts! From intricate paintings to handcrafted sculptures, and everything in between, our website offers a captivating array of artistic expressions</p> 
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-[15px]">Sl No</th>
                            <th className="text-[15px]">User Name</th>
                            <th className="text-[15px]">User Email Address</th>
                            <th className="text-[15px]">Price</th>
                            <th className="text-[15px]">Rating</th>
                            <th className="text-[15px]">Stock Status</th>
                            {/* <th className="text-[15px]">Processing Time</th> */}
                            <th className="text-[15px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arts.map((art, index) => <tr key={art._id}>
                                <th>{index + 1}</th>
                                <td>{art.user_name}</td>
                                <td>{art.user_email}</td>
                                <td>{art.price}</td>
                                <td>{art.rating}</td>
                                <td>{art.stock_status}</td>
                                {/* <td>{art.processing_time}</td> */}
                                <td>
                                    <Link to={`/artDetails/${art._id}`}>
                                        <button className="btn btn-block bg-green-700 text-white">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArts;