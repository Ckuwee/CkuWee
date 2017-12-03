import React, { Component } from 'react';
import Input from '../common/Input';
import { register } from '../../api/remote';
import { withRouter } from 'react-router-dom';

 class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',

        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

   async onSubmitHandler(e) {
        e.preventDefault();

        const res =  await register(this.state.username, this.state.email, this.state.password);

         this.props.history.push('/login')
    }

    

    render() {



        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmitHandler}>

                    <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                        label="Username"
                        className='form-control'
                        id='new-username'
                    />

                    <div className="form-group has-success">

                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"
                            className="form-control is-valid"
                        />
                        <div className="form-control-feedback">This input value is valid</div>
                    </div>

                    <div className="form-group has-danger">
                        <Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Password"
                            className="form-control is-invalid"
                            id="new-password"
                        />
                        <div className="form-control-feedback">This input value is invalid</div>
                    </div>
                    <div className="form-group has-danger">
                        <Input
                            name="repeat"
                            type="password"
                            value={this.state.repeat}
                            onChange={this.onChangeHandler}
                            label="Repeat password"
                            className="form-control is-invalid"
                        />
                        <div className="form-control-feedback">This input value is invalid</div>
                    </div>

                    <input type="submit" className="btn btn-secondary" value="Register" />
                </form>

            </div>
        );
    }
}

export default withRouter (RegisterPage);