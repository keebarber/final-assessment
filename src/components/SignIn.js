import React, { Component } from 'react';

class SignIn extends Component {

	constructor(props) {
		super(props);

            this.state = {
              user: {},
              username: "taylorswift",
              password: "awesomePassword"
            };
	}

render() {

  return (
      <div className="SignInBox">
			<form className ="LoginForm" onSubmit={this.handleSubmit.bind(this)}>

				<h2>Sign In</h2>

					<input  placeholder="Username" className = "LoginField" value={this.state.username} onChange={this.handleuserNameChange.bind(this)}/>
					<input placeholder="Password" className = "LoginField" type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
					<button className = "LoginField" type="submit">Submit</button>
                      
                          <a href="#">Forgot your password?</a>

			</form>
      </div>
  );
}




handleuserNameChange(event) {
	this.setState({
		username: event.target.value
	});
  }

handlePasswordChange(event) {
  this.setState({
    password: event.target.value
  });
}

  handleSubmit(event) {
      event.preventDefault();
      this.state.user = {
        username: this.state.username,
        password: this.state.password
        };

      this.props.onSubmit({
         user: this.state.user
      });

      this.setState({
          username: "",
          password: ""
      });
  }
}

export default SignIn;