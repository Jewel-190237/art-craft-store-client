/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { TiUserAdd } from "react-icons/ti";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { authContext } from "../provider/AuthProvider";
import UseTitle from "../layout/UseTitle";


const Login = () => {
    
    UseTitle('Login')

    const location = useLocation();
    const naviGate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, googleSignIn, gitHubSignIn } = useContext(authContext)

    const handleSignIn = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        try {
            // Attempt to sign in
            await signIn(email, password);
            naviGate(location?.state ? location.state : '/');
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Please check your credentials and try again.'
            });
        }
    }

    const handlesSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                naviGate(location?.state ? location.state : '/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Please try again later.'
                });
            });
    }

    const handlesSignInWithGitHub = () => {
        gitHubSignIn()
            .then(result => {
                console.log(result);
                naviGate(location?.state ? location.state : '/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Please try again later.'
                });
            });
    }

    return (
        <div>
            <div className=" min-h-screen bg-base-200 rounded-2xl mb-8">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold text-green-600">Login Now</h1>
                    </div>
                    <div className="md:w-1/3 w-full  shadow-2xl bg-base-100 rounded-2xl">
                        <form onSubmit={handleSignIn} className="card-body rounded-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Password" className="input w-full border-slate-300 pr-16" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5 ">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-700 text-white">Login</button>
                            </div>
                            <div>
                                <p className="text-center"> or <br /> Continue with</p>
                            </div>
                            <div>
                                <button onClick={handlesSignInWithGoogle} className="btn btn-outline w-full my-2  text-green-700">
                                    <FaGoogle></FaGoogle>
                                    Google
                                </button>
                                <button onClick={handlesSignInWithGitHub} className="btn btn-outline w-full  text-green-700">
                                    <FaGithub></FaGithub>
                                    gitHub
                                </button>
                            </div>
                            <div>
                                <p className="text-center">New Here ? please </p>
                                <Link to='/register'>
                                    <button className="btn btn-outline w-full mt-2  text-green-700">
                                        <TiUserAdd className="text-xl"></TiUserAdd>
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;