import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            setAuthToken(user);
            navigate(from, {replace: true});
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className='mx-auto'>
            <small>login with with</small> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-outline gap-2 my-5"><FcGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;