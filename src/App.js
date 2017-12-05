import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
import UserDashboard from './components/HomePage/UserDashboard';

   export let errorLet = '';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            error : ''
        }

        
        this.onLogout = this.onLogout.bind(this);
        
        if(!localStorage.getItem('token')){
            this.props.history.push('/register');
            errorLet =  'you need to login!'
        }
    }



    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                {/* <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} /> */}
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/user" component={UserDashboard} />
 

                   
                 </Switch>

            </div>
                );
    }
}

export default withRouter(App);