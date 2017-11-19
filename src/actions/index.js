// import { findMatchingUser } from '../users';

// export function login(username, password) {
//     return function(dispatch) {
//         const user = findMatchingUser(username, password);
//         // If it username/password are correct, a user object will be available
//         if (user) {
//         	console.log(user);
//             // TODO #6 trigger a LOGIN_SUCCESS action here
//             return {
//             type: "LOGIN_SUCCESS",
//             user
//           };
//         }
//         else {
//           	return user;
//           }
//     };
// }

export function login(username, password) {
	return {
		type: "LOGIN_SUCCESS",
		username,
		password
	};
}