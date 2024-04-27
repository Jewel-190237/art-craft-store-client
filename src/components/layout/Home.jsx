/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import ArtCard from "./ArtCard";

const Home = () => {

    const loadedArts = useLoaderData()
    const [arts, setArts] = useState(loadedArts)
    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ml-3">
                {
                    arts.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default Home;