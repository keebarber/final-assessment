import React, { Component } from 'react';

class LoginForm extends Component {

	constructor(props) {
		super(props);

            this.state = {
              username: "",
              password: ""
            };
	}

	render() {

		return (

			<form className ="LoginForm" onSubmit={this.handleSubmit.bind(this)}>
				<h2>Please enter your login information</h2>
					<label>User Name:</label>
					<input  value={this.state.username} onChange={this.handleuserNameChange.bind(this)}/>

					<label>Password:</label>
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>

					<button type="submit">Submit</button>
			</form>

		);
	}

handleuserNameChange(event) {
	this.setState({
		username: event.target.value
	});
  console.log(this.state.username);
  }

handlePasswordChange(event) {
  this.setState({
    password: event.target.value
  });
}

  handleSubmit(event) {
      event.preventDefault();
      debugger;
      this.props.onSubmit({
          username: this.state.username,
          password: this.state.password
      });

      this.setState({
          username: "",
          password: ""
      });
  }


}

export default LoginForm;