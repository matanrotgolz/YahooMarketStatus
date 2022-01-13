import styled from 'styled-components';
export const BoxContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
`;

export const FormContainer = styled.form`
    align-items: center;
    display:flex;
    width:150%;
    flex-direction: column;
    box-shadow: 0px 0px 2.4px rgba(15,15,15,0.19);
    
`;

export const MutedLink = styled.p`
    position: relative;
    right:20px;
    top:29px;
    font-size: 12px;    
    color: rgba (200, 200,200,0.8);
    font-weight:500;
    text-decoration: none;
    margin:1.5em;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(2,0,36);
    font-weight:600;
    text-decoration: none;
    border:1px solid black;
    padding: 10px 10px;
`;

export const Input = styled.input`
    width: 70%;
    height:42px;
    outline:none;
    border: none;
    padding: 0px 10px;
    border-bottom 1.4px solid  transparent;
    transition:all 200ms ease-in-out;

    &::placeholder{
        color:rgba(200,200,200,1);
    }
    &::not(:last-of-type){
        border-bottom:1.5px solid rgba (200,200,200,0.4);
    }
    &:focus{
        outline:none;
        border-bottom: 2px solid rgb(2,0,36);
    }
`;
export const SubmitButtom = styled.button`
    position: relative;
    right:20px;
    top:30px;
    width:100%;
    padding: 11px 40%;
    color: #fff;
    font-size:15px;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%);
    &:hover{
        filter: brightness(1.03);
    }
`;