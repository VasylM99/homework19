import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';
import lock from '../img/padlock.png';



const errorIn = {
    border : '1px solid red',
    
  }
const noError = {
    border : '1px solid green'
}
const border = {
    border : '1px solid #3e3e3e'
}
class SingIn extends Component{
    state = {
        email: '',
        pass: '',
        borderEmail : border,
        borderPass : border,
        corectEmail: false,
        corectPass: false,
        check : false
        
    };
    inputEmail = (e)=>{
        this.setState({
          email : e.target.value  
        }) 
        if (e.target.value.match(/^...+@..+\...+$/) != null) {
            this.setState({
                corectEmail : true,
                borderEmail : noError
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
                borderPass : noError,
            });
            }else{
            this.setState({
                corectPass : false,
                borderPass : errorIn,
                });
            }   
        }
    checkbox = (e) => {
        this.setState({
            check : !this.state.check          
        })
    } 
    submit = ()=> {
        if (this.state.corectPass && this.state.corectEmail) {
            const data = {
                email : this.state.email,
                password : this.state.pass,
                remember : this.state.check
            };
            if (this.state.check) {
                localStorage.setItem('User', JSON.stringify(data));
            }
            this.setState({
                email: '',
                pass: '',
                borderEmail : border,
                borderPass : border,
                corectEmail: false,
                corectPass: false,
                check : false
            });
            console.log(data);

        }else {
            alert("Заповніть форму");
        }
    };
    render(){
        return(
            <div className='wrapper'>
                <div className='container'>
                    <div className='icon'>
                        <div className='img-box'>
                            <img className='padlock' src={lock} alt='padlock'></img>
                        </div>
                        <p>Sing in</p>
                    </div>
                    <form>
                        <div className='input-box'>
                            <div className='input-email'>
                                <input type='email' value={this.state.email} placeholder='Email Address*' onChange={this.inputEmail}  style={this.state.borderEmail} ></input>
                            </div>
                            <div className='input-pass'>
                                <input type='password'value={this.state.pass} placeholder='Password*' name="password" autoComplete='on' onChange={this.inputPass} style={this.state.borderPass}></input>
                            </div>
                        </div>
                        <div className='checkbox'>
                                <input type='checkbox' checked={this.state.check} onChange={this.checkbox} />
                                Remember me
                            
                        </div>
                        <div className='sing'>
                            <button type='button' onClick={this.submit}>SING IN</button>
                        </div>
                        <div className='link'>
                            <div>Forgot password?</div>
                            <Link to='/sing-up'>Don't have an account? Sing Up</Link>      
                        </div>  
                    </form>
                    
                </div>
                <footer>Copyright &copy; Your Website 2020.</footer>
                
            </div>
        )
    }
};

export default SingIn;