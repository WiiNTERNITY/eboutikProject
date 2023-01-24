import React from 'react';
import "./styles/login.scss";

const Login = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <div>
                    <input type='email' placeholder='email' />
                </div>
                <div>
                    <input type='password' placeholder='password' />
                </div>
                <div>
                    <button type='submit'>Envoyer</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
