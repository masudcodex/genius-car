import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error(error))

    }

    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='mb-5 text-center'>Already have an account? <Link className='text-red-500 font-semibold' to="/login">Login</Link></p>
                    </div>
                    <div className="text-center">
                        <img className='w-4/6' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;