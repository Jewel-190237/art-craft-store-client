import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";

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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th><button>Action</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arts.map(art => <tr key={art._id}>
                                <th></th>
                                <th>{art.user_name}</th>
                                <th>{art.email}</th>
                                <th>Category</th>
                                <th><button>Delete</button></th>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCurt;