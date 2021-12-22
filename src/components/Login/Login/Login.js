import React, { useState } from 'react';
import initAuthentication from '../../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";



initAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
    }
    const handleGitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            loginProcess(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handlePassReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    return (
        <div className="col-md-7 mx-auto my-4 text-start">
            <form onSubmit={handleRegistration}>
                <h3 className="text-success my-3">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="Your Email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required placeholder="Your Password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-success">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" onClick={handlePassReset} className="btn btn-warning  mx-5">Reset Password</button>

            </form>

            <div className="my-5">
                <h4 className="my-3 text-secondary">------Or Login With------</h4>
                <button onClick={handleGoogleLogin} className="btn btn-danger">Google </button>
                <button onClick={handleGitHubLogin} className="btn btn-secondary mx-4">GitHub</button>
            </div>
        </div>
    );
}

export default Login;