import React from 'react';
import Axios from 'axios';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
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

        if(this.state.password === this.state.password_confirmation){
            Axios.post('http://localhost:3000/api/v1/auth',
                {
                    email: this.state.email,
                    name: this.state.name,
                    password: this.state.password,
                    password_confirmation: this.state.password_confirmation
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function (error){
                    console.log(error);
                });
        }
        else{
            alert("Password and Confirm Password do not match!!");
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    <br />
                    <label>E-mail</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleInputChange} />
                    <br />
                    <label>Confirm Password</label>
                    <input type="password" name="password_confirmation" onChange={this.handleInputChange} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Register;