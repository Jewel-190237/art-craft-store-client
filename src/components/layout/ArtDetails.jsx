/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseTitle from "./UseTitle";

const ArtDetails = () => {
    UseTitle('Art Details')
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
            <div>
                <h2 className="text-3xl text-center font-bold text-green-600">Product Details of {product_name}</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Adding to cart is the digital equivalent of placing an item in your shopping basket. Its a simple click or tap that reserves the product for you, allowing you to continue browsing or proceed to checkout whenever you are ready</p>
                </p>
            </div>
            <div className="hero ">
                <div className="flex flex-col md:flex-col lg:flex-row w-full gap-8">
                    <div className="w-full">
                        <img className='w-full rounded-3xl p-3' src={photo_url} />
                    </div>
                    <div className="p-3 w-full">
                        <h1 className="text-xl font-bold p-3 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">Product Name: {product_name}</h1>
                        <p className="m-1 p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">Sub Title : {sub_category_name}</p>
                        <hr />
                        <p className="font-bold text-[#23BE0A] bg-[#23BE0A0D] rounded-xl p-2">Description: <span className="font-thin">{description}</span></p>
                        <hr />
                        <div>
                            <p className="p-1 m-1 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl  ">Price: <span className="font-bold pl-11">{price}</span> </p>
                            <p className="p-1 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl mb-2">Rating: <span className="font-bold pl-10">{rating}</span></p>
                            
                        </div>
                        <hr />
                        <div >
                            <div className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl w-full">
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Customization:</p>
                                    <p className="font-bold">{customization}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-14"> Stock Status:</p>
                                    <p className="font-bold">{stock_status}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Processing Time</p>
                                    <p className="font-bold">{processing_time}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-16">User Name:</p>
                                    <p className="font-bold">{user_name}</p>
                                </div>
                                <div className="flex mt-1 p-2  ">
                                    <p className="mr-16"> Email:</p>
                                    <p className="font-bold">{user_email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;