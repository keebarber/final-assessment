import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import Profile from './Profile';
import { login } from '../actions';



class App extends Component {
  render() {
    return (
      <div className="App">
      	<SignIn  onSubmit={this.props.login}/>
      	<Profile />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

const mapActionsToProps = {
	login
};

export default connect(mapStateToProps, mapActionsToProps)(App);
