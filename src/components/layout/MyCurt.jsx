import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import MyCurtDetails from "./MyCurtDetails";

const MyCurt = () => {

    const { user } = useContext(authContext)
    const [arts, setArts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myCurt/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
                console.log(data)
            })
    }, [])
    return (
        
        <div>
            <h2 className="text-3xl text-center">My curt section</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    arts.map(art => <MyCurtDetails key={art._id} art={art}></MyCurtDetails>)
                }
            </div>
            
        </div>
    );
};

export default MyCurt;