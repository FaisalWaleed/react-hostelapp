import React from 'react';
import Axios from 'axios';
import Flash from "../Common/Flash";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
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

        if(this.state.password === this.state.password_confirmation){
            Axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/auth',
                data: {
                    email: this.state.email,
                    name: this.state.name,
                    password: this.state.password,
                    password_confirmation: this.state.password_confirmation
                }
            }).then(function(response){
                console.log(response);
                if(response.data.data.id){
                    alert("Successfully Registered!");
                    self.props.history.push("/");
                }
            }).catch(function (error){
                let errors = error.response.data.errors.full_messages;
                self.setState({errors: errors});
            });
        }
        else{
            alert("Password and Confirm Password do not match!!");
        }
    }

    render(){
        return(
            <div className="col-md-5 col-md-offset-1">
                <h1>Register </h1>

                {this.state.errors.length > 0 && <Flash message={this.state.errors} type="danger" /> }

                <form onSubmit={this.handleSubmit}>
                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} required />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.handleInputChange} />
                    <br />
                    <label>Confirm Password</label>
                    <input type="password" name="password_confirmation" className="form-control" onChange={this.handleInputChange} />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        );
    }
}

export default Register;