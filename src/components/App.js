import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import Profile from './Profile';
import { login } from '../actions';



class App extends Component {
  render() {
    if (this.props.loggedInUser != null) {
      return (
      <div className="App">
          <Profile />
      </div>
      );
    } else {
      return (
       <div className="App">
          <SignIn  onSubmit={this.props.login}/>
      </div>
        );
    }
  }
}

function mapStateToProps(state) {
	return {
		user: state.user,
             loggedInUser: state.loggedInUser
	};
}

const mapActionsToProps = {
	login
};

export default connect(mapStateToProps, mapActionsToProps)(App);
