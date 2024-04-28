import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { FaSignInAlt } from "react-icons/fa";



const Register = () => {

    const [passwordError, setPasswordError] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        setPasswordError('');
        console.log(name, photoUrl, email);

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const length = password.length >= 6;


        if (!uppercase || !lowercase || !length) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and have a minimum length of 6 characters.");
            return;
        }

        try {
            // await createUser(email, password);

            Swal.fire({
                icon: 'success',
                title: 'Registration successfully Done',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/');
        } catch (error) {

            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Registration failed',
                text: 'Please try again later.'
            });
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Register Your Account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Password" className="input border-slate-300 pr-16" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="mt-4 -ml-5">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                                </div>
                                {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p>Already have an account?  Please</p>
                                <Link to='/login'>
                                    <button className="btn btn-outline w-full mt-4">
                                        <FaSignInAlt></FaSignInAlt>
                                        Login
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

export default Register;