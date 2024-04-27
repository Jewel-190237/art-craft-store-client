/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtDetails = () => {
    const { id } = useParams()
    console.log(id)

    const [art, setArt] = useState({})

    // const { product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = arts
    useEffect(() => {
        fetch(`http://localhost:5000/singleArts/${id}`)
            .then(res => res.json())
            .then(data => {
                setArt(data)
                console.log(data)
            })
    }, [id])

    const { _id, product_name, sub_category_name, price, rating, customization, processing_time, stock_status, description, user_name, user_email, photo_url } = art;

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex md:flex-col lg:flex-row gap-4 mx-auto">
                    <img className='w-full rounded-3xl bg-[#1313130D]' src={photo_url} />
                    <div>
                        <h1 className="text-xl font-bold px-2 pb-2">Name: {product_name}</h1>
                        <p className="p-2">Title : {sub_category_name}</p>
                        <hr />
                        <p className="font-bold p-2">Review: <span className="font-thin">{description}</span></p>
                        <hr />
                        <div className="flex">
                            <p className="p-2 font-bold">Facilities</p>
                            <p className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">#{price}</p>
                            <p className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl">#{rating}</p>
                        </div>
                        <hr />
                        <div >
                            <div className="flex mt-1">
                                <p className="mr-16">Location:</p>
                                <p className="font-bold">{customization}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Status:</p>
                                <p className="font-bold">{stock_status}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Area:</p>
                                <p className="font-bold">{processing_time}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">Rating:</p>
                                <p className="font-bold">{user_name}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-16">City:</p>
                                <p className="font-bold">{user_email}</p>
                            </div>
                            {/* <div className="flex mt-1">
                                <p className="mr-16"> Type:</p>
                                <p className="font-bold">{land.property_type}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-10">Prices:</p>
                                <p className="font-bold">{land.price}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="mr-10">Discount: </p>
                                <p className="font-bold">{land.discount}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;