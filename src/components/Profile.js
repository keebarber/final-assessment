import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

	render() {
		
		return(
		<div className="Profile">

			<div className="ProfileContainer">
				<h2>Profile</h2>
				<h4> Welcome, {this.props.user.name}</h4>
				<div className ="main">

					<div className='UserData'>
						<div className="ProfilePic">
							<img className = "ProfileImage" src={this.props.user.img} />
						</div>
						<div className="UserData_List">
							<p>Email: {this.props.user.email}</p>
							<p>Phone: {this.props.user.phone}</p>
							<p>Location: {this.props.user.location}</p>
						</div>

					</div>
				</div>
				<a className ="EditProfile" href = "#">Edit Profile</a>
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, null)(Profile);