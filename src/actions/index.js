import { findMatchingUser } from '../users';

export function login(username, password) {
    return function(dispatch) {
    	// username = username.username;
    	// password = username.password;
        const user = findMatchingUser(username, password);
        console.log(username);
        console.log(password);
        console.log(user);
        // If it username/password are correct, a user object will be available
        if (user) {
        	console.log(user);
            // TODO #6 trigger a LOGIN_SUCCESS action here
            dispatch(loginsuccess(user));
            
        }
        else {
          	return console.log("invalid login");
          }
    };
}



function loginsuccess(user) {
	return {
            type: "LOGIN_SUCCESS",
            user
          };
}

// export function login(username, password) {
// 	return {
// 		type: "LOGIN_SUCCESS",
// 		username,
// 		password
// 	};
// }