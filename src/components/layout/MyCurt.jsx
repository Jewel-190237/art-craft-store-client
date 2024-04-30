import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import MyCurtDetails from "./MyCurtDetails";
import { Link } from "react-router-dom";
import UseTitle from "./UseTitle";

const MyCurt = () => {
    UseTitle('My Curt')
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
            {
                arts.length == 0 ?
                    <p className="text-center mx-auto md:w-3/4 mb-10 mt-4">
                        <p>Please Add  products as your choice, then you can see your added products <br />
                            to add product please visit <Link to='/addArt'> <button className="btn bg-slate-400 text-white outline outline-1 outline-green-700 m-2 "> Add Products</button> </Link>
                        </p>
                    </p>
                    :
                    <p className="text-center mx-auto md:w-3/4 mb-10">
                        <p>Welcome to Curt, your one-stop platform for creating personalized pages effortlessly. Customize your space with images, text, and links to share your story or showcase your work. Get started in seconds and make your online presence shine with Curt.</p>
                    </p>
            }
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

            <p className="text-center">
                Add more product please visit
                <Link to='/addArt'> <button className="btn bg-slate-400 text-white outline outline-1 outline-green-700 m-2 "> Add Products</button> </Link>
            </p>

        </div>
    );
};

export default MyCurt;