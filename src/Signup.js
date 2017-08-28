import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
    }
    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <hr />
                <form>
                    <div className="form-group">
                        <label htmlFor="inputUsername" className="form-control-label">Username</label>
                        <input type="text" id="inputUsername" className="form-control" onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="form-control-label">Email</label>
                        <input type="email" id="inputEmail" className="form-control" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="form-control-label">Password</label>
                        <input type="password" id="inputPassword" className="form-control" onChange={this.handlePasswordChange}/>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={this.handleSignUpClick}>Sign Up</button>
                </form>
            </div>
        )
    }

    //Helper Functions
    handleSignUpClick() {
        axios.post('/signup',{
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
}

export default Signup