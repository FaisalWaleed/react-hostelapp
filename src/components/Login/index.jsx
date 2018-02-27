import React from 'react';
import Axios from "axios/index";
import { Link } from 'react-router-dom';
import Flash from "../Common/Flash";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        let self = this;

        Axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/auth/sign_in',
            data: {
                email: this.state.email,
                password: this.state.password,
            }
        }).then(function(response){
            console.log(response);
            if(response.data.data.id){
                localStorage.setItem('access-token',response.headers["access-token"]);
                localStorage.setItem('client',response.headers["client"]);
                localStorage.setItem('uid',response.headers["uid"]);
                alert("Successfully Logged In!");
                self.props.history.push("/");
            }
        }).catch(function (error){
            let error_messages = error.response.data.errors;
            self.setState({errors: error_messages});
            // errors.forEach(function (error_message) {
            //     console.log(error_message);
            // });
        });
    }

    render(){
        return(
            <div className="col-md-5 col-md-offset-1">
                <h1>Login</h1>

                {this.state.errors.length > 0 && <Flash messages={this.state.errors} type="danger" /> }

                <form onSubmit={this.handleSubmit}>
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} required />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.handleInputChange} />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Login" />
                    <br/>
                    <span>Not a Member? <Link to="/register">Click here to Register</Link></span>
                </form>
            </div>
        );
    }
}

export default Login;
