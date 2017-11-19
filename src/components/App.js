import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';
import { login } from '../actions';



class App extends Component {
  render() {
    return (
      <div className="App">
      	<LoginForm  onSubmit={this.props.login}/>
      	{this.props.username.username}
      	{this.props.username.password}
      	<UserInfo />
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

const mapActionsToProps = {
	login
};

export default connect(mapStateToProps, mapActionsToProps)(App);
