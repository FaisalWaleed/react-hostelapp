import React from 'react';
import Axios from "axios/index";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
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

        let props = this.props;

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
                alert("Successfully Logged In!");
                props.history.push("/");
            }
        }).catch(function (error){
            let errors = error.response.data.errors;
            errors.forEach(function (error_message) {
                console.log(error_message);
            });
        });
    }

    render(){
        return(
            <div className="col-md-5 col-md-offset-1">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} required />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.handleInputChange} />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;