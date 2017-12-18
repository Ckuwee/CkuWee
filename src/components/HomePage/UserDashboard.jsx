import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

  class UserDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currUser: ''
        };

        this.onLogout = this.onLogout.bind(this);

       
         
    }

    componentDidMount() {
         this.setState({currUser :  localStorage.getItem('username') } ) 
      }
     
   

      onLogout() {
        localStorage.clear();
        this.props.history.push('/login');

       
    }


    render() {
        const {loggedIn} = this.props;
        {console.log(loggedIn)}
        if(loggedIn){
            this.props.history.push('/login'); 
        }

        return (
            <div className="container">
                {<a href="javascript:void(0)" onClick={this.onLogout}>Logout</a>}
                <h1>User Dashboard</h1>
                <p>Welcome to our site  <span style={{color:'green',
                      fontWeight: 'bold',
                      textTransform: 'Uppercase'
                      }} > 
                     {this.state.currUser}</span></p>
               
            </div>
        );
    }
}


export default withRouter(UserDashboard);