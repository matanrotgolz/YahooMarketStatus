import YahooApp from './App'
import React, { useContext} from 'react';
import {BoxContainer,FormContainer,Input,SubmitButtom,MutedLink,BoldLink} from './common.jsx';
import AccountContext  from './accountContext.js';
import ReactDOM from 'react-dom';

export default function LoginForm(props){
    const {switchToSignUP} = useContext(AccountContext);
        const CheckData=()=>{
            if(document.getElementById('email').value === 'anyUserName'){
                if(document.getElementById('password').value === 'AnyPassword'){
                    ReactDOM.render(<YahooApp/>,document.getElementById('root'));
                }
                else{
                    alert('Password or Username Incorrect');
                }
                
               
            } else{
                alert('Password or Username Incorrect');
            }
        }
        return(
            <BoxContainer>
                <FormContainer>
                    <Input id= "email" type = "email" placeholder="Email"/>
                    <Input id= "password" type = "password" placeholder="Password"/>
                </FormContainer>
                <MutedLink href = '#'>Forget Your Password?</MutedLink>
                <SubmitButtom type = "submit" onClick={CheckData}>Sign In</SubmitButtom>
                <MutedLink>Dont have an account?<BoldLink href = '#' onClick = {switchToSignUP}><strong>Sign Up</strong></BoldLink></MutedLink>
            </BoxContainer>
        );
}
