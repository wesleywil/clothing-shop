import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const googleSignInStartHandler = () => dispatch(googleSignInStart());
    const emailSignInStartHandler = () => dispatch(emailSignInStart(userCredentials));


    const [userCredentials, setUserCredentials] = useState({ email: '', password: ''});
    const {email, password} = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault();
        
        emailSignInStartHandler(email, password);
        
    };
    
    const handleChange = event =>{
        const {value, name} = event.target;

        setUserCredentials({ ...userCredentials, [name]:value })
    };

    
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name='email' 
                type='email' 
                handleChange={handleChange} 
                value={email}
                label='email' 
                required
                />
                <FormInput 
                name='password' 
                type='password' 
                value={password}
                handleChange={handleChange}
                label='password'
                required
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStartHandler} isGoogleSignIn>
                        {''}
                        Sign In with Google
                        {''}
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}



export default SignIn;