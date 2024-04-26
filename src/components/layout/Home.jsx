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
            {
                arts.map(art => <ArtCard key={art._id} art ={art}></ArtCard>)
            }
        </div>
    );
};

export default Home;