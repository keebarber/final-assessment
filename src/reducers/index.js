const INITIAL_STATE = {
		user: {},
		loggedInUser: null
};


export default function(state = INITIAL_STATE, action) {
		switch(action.type) {
			case "LOGIN_SUCCESS":
				return login(state, action.user);
			default:
				return state;
		}
}


function login(state, user) {
	const currentUser = user;

	return Object.assign({}, state, {
		user: currentUser,
		loggedInUser: !state.loggedInUser
		
	});
}