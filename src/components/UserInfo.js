import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {

	render() {
		
		return(
			<div className="UserInfo">

				<p>{this.props.username.username}</p>
				<p>This name</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password
    };
}

export default connect(mapStateToProps, null)(UserInfo);