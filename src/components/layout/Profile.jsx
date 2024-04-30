import userPhoto from '../../assets/user.png'
import { auth } from '../firebase/firebase';
import UseTitle from "./UseTitle";


const Profile = () => {


    UseTitle("Profile")

    const userInfo = auth.currentUser;
    console.log(userInfo)

    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 shadow-xl w-1/2 m-8">
                <figure className="px-10 pt-10">
                    {
                        userInfo.photoURL ?
                            <img src={userInfo.photoURL} alt="User" className="rounded-xl" />
                            :
                            <img alt="user" src={userPhoto} />
                    }

                </figure>
                <div className="card-body items-center text-center">
                    {
                        userInfo.displayName ?
                            <h2 className="card-title">{userInfo.displayName}</h2>
                            :
                            <h2 className="card-title">User Name</h2>

                    }
                    <p>{userInfo.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;