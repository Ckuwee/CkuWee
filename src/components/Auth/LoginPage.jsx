import React, { Component } from 'react';
import Input from '../common/Input';
import { login } from '../../api/remote';
import { withRouter } from 'react-router-dom';
import UserDashboard from '../HomePage/UserDashboard';
import {errorLet} from '../../App.js';

 class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            token : '',
            error: '',
            currUser : ''
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

        if(res.error){
            console.log(res)
            this.setState({error: res.error});
            return;
        }
            localStorage.setItem('token', res._kmd.authtoken); 
         localStorage.setItem('username', res.username); 

        this.props.history.push('/user') 
         
        
        
    }
         
    render() {

        return (

         
            <div className="container">
                {errorLet}
               <b style={{color: 'red'}}> {this.state.error} </b>

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