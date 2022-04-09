import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInGoogle } = useFirebase()
    return (
        <div>
            <h2>Login</h2>
            <form >
                <input type="email" placeholder='Email' /> <br />
                <input type="password" placeholder='Password' /> <br />
                <input type="submit" value="Login" />
            </form>
            <div>
                <button onClick={signInGoogle}>Google login</button>
            </div>
        </div>
    );
};

export default Login;