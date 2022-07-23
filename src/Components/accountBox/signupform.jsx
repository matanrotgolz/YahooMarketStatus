
import React, { useContext } from 'react';
import {BoxContainer2,FormContainer,Input,SubmitButtom} from './common.jsx';
import AccountContext  from './accountContext.js'
export default function SignUp (props) {
    const {switchToSignIn} = useContext(AccountContext);
        return(
            <BoxContainer2>
                <FormContainer>
                    <Input  type = "text" placeholder="Full name"/> 
                    <Input type = "email" placeholder="Email"/>
                    <Input type = "password" placeholder="Password"/>
                    <Input type = "password" placeholder="Confirm Password"/>
                </FormContainer>
                <SubmitButtom type = "submit" onClick ={switchToSignIn}>Sign Up</SubmitButtom>
            </BoxContainer2>
        )
        
        }
