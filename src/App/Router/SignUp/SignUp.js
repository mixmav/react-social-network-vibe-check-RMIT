import { useState } from 'react';
import { useUser, useUserUpdate } from 'Context/UserContext';
import {
	// useUserDatastore, 
	useUserDatastorePush 
} from 'Context/UserDatastoreContext';
import { Redirect } from 'react-router-dom';

import './SignUp.scss';

function SignUp() {
	const user = useUser();
	const updateUser = useUserUpdate();

	// const userDatastore = useUserDatastore();
	const pushToUserDatastore = useUserDatastorePush();

	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const validateForm = (event) => {
		event.preventDefault();
		if(
			userPassword.length < 6 || // Is at least 6 characters long
			!userPassword.match(/[a-z]/) || // Contains at least 1 lowercase letter
			!userPassword.match(/[A-Z]/) || // Contains at least 1 uppercase letter
			!userPassword.match(/[0-9]/) || // Contains at least one number
			!userPassword.match(/[\W_]/) // Contains at least one special character including an underscore
		){
			alert('Password needs to be at least 6 characters including uppercase, lowercase characters, and a number and a punctuation.');
			return;
		}

		//TODO Check if user's email is unique

		// Valid user, sign them up, sign them in, and redirect to the profile page

		updateUser({
			authenticated: true,
			name: userName,
			email: userEmail,
		});

		pushToUserDatastore({
			name: userName,
			email: userEmail,
			password: userPassword
		});
	}

	return (
		<div className="router-page-signup-container">
			<span>
				<h1>Sign up</h1>
				<form onSubmit={validateForm}>
					<input onChange={e => setUserName(e.target.value)} className="text-input full-width" type="text" name="name" placeholder="Name" autoFocus />
					<input onChange={e => setUserEmail(e.target.value)} className="text-input full-width mt-10" type="email" name="email" placeholder="Email" />
					<input onChange={e => setUserPassword(e.target.value)} className="text-input full-width mt-10" type="password" name="password" placeholder="Password"/>
					
					<button className="btn full-width mt-20"><i className="fa fa-user-plus"></i>Sign up</button>
					{
						// If the user is authenticated, redirect to the profile page.
						user.authenticated && <Redirect to="/profile"></Redirect>
					}
				</form>
			</span>
		</div>
	);


}

export default SignUp;
