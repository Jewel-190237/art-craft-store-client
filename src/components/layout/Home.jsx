/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import ArtCard from "./ArtCard";

const Home = () => {

    const loadedArts = useLoaderData()
    const [arts, setArts] = useState(loadedArts)
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl font-bold text-center  m-5">Arts and Crafts</h2>
                <p className="text-center mx-auto md:w-1/2 mb-10">
                    <p>Explore a vibrant world of creativity with our diverse collection of arts and crafts! From intricate paintings to handcrafted sculptures, and everything in between, our website offers a captivating array of artistic expressions</p>
                </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    arts.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                }

            </div>
            <p className="text-center"> <Link to='/allArts'>
                <button className="btn bg-lime-900 text-white m-8">View All arts and Crafts </button>
            </Link></p>
        </div>
    );
};

export default Home;