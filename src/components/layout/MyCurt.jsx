import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import MyCurtDetails from "./MyCurtDetails";

const MyCurt = () => {

    const { user } = useContext(authContext);
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myCurt/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
                // console.log(data)
            })
    }, [])
    return (

        <div>
            <h2 className="text-3xl text-center font-bold text-green-600">My Curt</h2>
            <p className="text-center mx-auto md:w-3/4 mb-10">
                <p>Welcome to Curt, your one-stop platform for creating personalized pages effortlessly. Customize your space with images, text, and links to share your story or showcase your work. Get started in seconds and make your online presence shine with Curt.</p>
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    arts.map(art => <MyCurtDetails
                        key={art._id}
                        art={art}
                        arts={arts}
                        setArts={setArts}
                    >
                    </MyCurtDetails>)
                }
            </div>

        </div>
    );
};

export default MyCurt;