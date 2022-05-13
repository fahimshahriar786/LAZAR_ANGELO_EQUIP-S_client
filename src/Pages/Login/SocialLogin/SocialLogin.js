import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate= useNavigate();
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

if(user){
    navigate('/home');
}
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
            </div>
            <div>
                
                <Button
                onClick={()=> signInWithGoogle() }
                className='bg-warning text-dark rounded-pill fw-bold d-block mx-auto '>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span> </Button>
            </div>
        </div>

    );
};

export default SocialLogin;