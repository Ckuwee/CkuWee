import React, { Component } from 'react';
import Input from '../common/Input';
import { login } from '../../api/remote';
import { withRouter } from 'react-router-dom';

 class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            token : ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
       
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    async onSubmitHandler(e) {
        e.preventDefault();
      const   res = await login(this.state.username, this.state.password);
      localStorage.setItem('token', res._kmd.authtoken);   
        this.props.history.push('/plan')
        
    }
         
    render() {
        return (

         
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                        label="Username"
                    />
                    <Input
                 
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
            
            </div>
            
        );
    }
}

export default withRouter(LoginPage);