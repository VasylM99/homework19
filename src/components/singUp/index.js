import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import lock from '../img/padlock.png';

const errorIn = {
    border : '1px solid red'
  }
const noError = {
    border : '1px solid green'
}
const border = {
    border : '1px solid #3e3e3e'
}
class SingUp extends Component{
    state = {
        email: '',
        pass: '',
        corectEmail: false,
        corectPass: false,
        firstName : '',
        lastName : '',
        corectFirstName : false,
        corectLastName : false,
        borderEmail : border,
        borderPass : border,
        borderFirstName : border,
        borderLastName : border,
        check : false
    };
    inputEmail = (e)=>{
        this.setState({
          email : e.target.value  
        }) 
        if (e.target.value.match(/^...+@..+\...+$/) != null) {
            this.setState({
                corectEmail : true,
                borderEmail: noError
            });
        }else{
            this.setState({
                corectEmail : false,
                borderEmail : errorIn
            });
        }
    }
    inputPass = (e)=>{
        this.setState({
          pass : e.target.value  
        }) 
        if (e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) != null) {
            this.setState({
                corectPass : true,
                borderPass : noError
            });
            }else{
            this.setState({
                corectPass : false,
                borderPass : errorIn
                });
            }   
        }
        inputFirstName = (e)=>{
            this.setState({
              firstName : e.target.value  
            }) 
            
            if (e.target.value.match(/^...+$/)!=null) {
                this.setState({
                    corectFirstName : true,
                    borderFirstName : noError
                });
                
                }else{
                this.setState({
                    corectFirstName : false,
                    borderFirstName : errorIn
                    
                    });
                }
        }
        inputLastName = (e)=>{
            this.setState({
                lastName : e.target.value  
            }) 
            if (e.target.value.match(/^...+$/)!=null) {
                    this.setState({
                        corectLastName : true,
                        borderLastName : noError
                    
                    });
                }else{
                    this.setState({
                        corectLastName : false,
                        borderLastName : errorIn
                    });   
                }   
            }
        checkbox = (e) => {
            this.setState({
                check : !this.state.check
                
            })
            
        }
        register = ()=> {
            if (this.state.corectPass && this.state.corectEmail
            &&this.state.corectFirstName&& this.state.corectLastName) {
                const data = {
                    email : this.state.email,
                    password : this.state.pass,
                    firstName : this.state.firstName,
                    lastName : this.state.lastName,
                    receive : this.state.check
                };
                this.setState({
                    email: '',
                    pass: '',
                    corectEmail: false,
                    corectPass: false,
                    firstName : '',
                    lastName : '',
                    corectFirstName : false,
                    corectLastName : false,
                    borderEmail : border,
                    borderPass : border,
                    borderFirstName : border,
                    borderLastName : border,
                    check : false
                });
                console.log(data);
    
            }
            else alert("Заповніть форму");
        };
    render(){
        return(
            <div>
                <div className='wrapper'>
                    <div className='container'>
                        <div className='icon'>
                            <div className='img-box'>
                                <img className='padlock' src={lock} alt='padlock'></img>
                            </div>
                            <p>Sing up</p>
                        </div>
                        <form>
                            <div className='input-box'>
                                <div className='name'>
                                    <input type='text' value={this.state.firstName} placeholder='First Name*' onChange={this.inputFirstName} style={this.state.borderFirstName}></input>                          
                                    <input type='text' value={this.state.lastName} placeholder='Last Name*' onChange={this.inputLastName} style={this.state.borderLastName}></input>
                                </div>
                                <div className='input-email'>
                                    <input type='email' value={this.state.email} placeholder='Email Address*' onChange={this.inputEmail} style={this.state.borderEmail}></input>
                                </div>
                                <div className='input-pass'>
                                    <input type='password' value={this.state.pass} placeholder='Password*' autoComplete='off' onChange={this.inputPass} style={this.state.borderPass}></input>
                                </div>
                            </div>
                            <div className='checkbox '>
                                    <input type='checkbox' checked={this.state.check} onChange={this.checkbox}/>
                                    <p>I want to receive inspiration, marketing promotion and updates via email.</p>
                            </div>
                            <div className='sing'>
                                <button type='button' onClick={this.register}>SING UP</button>
                            </div>
                            <div className='link link-r'>
                                <Link to='/'>Already have an account? Sing in</Link>
                            </div>
                        </form> 
                    </div>
                    <footer>Copyright &copy; Your Website 2020.</footer>
                    
                </div>
            </div>
        )
    }
};

export default SingUp;