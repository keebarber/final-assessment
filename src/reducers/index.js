const INITIAL_STATE = {
		username: "testuser",
		password: "test word"
};


export default function(state = INITIAL_STATE, action) {
		switch(action.type) {
			case "LOGIN_SUCCESS":
				return login(state, action.username, action.password);
			default:
				return state;
		}
}

function login(state, username, password) {

	const newUser = username;
	const newPassword = password;
	console.log(newUser);

	return Object.assign({}, state, {
		username: newUser,
		password: newPassword
		
	});
}