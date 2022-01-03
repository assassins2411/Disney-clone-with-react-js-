import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images-disney/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>The Walt Disney Co. is a diversified international family entertainment and media enterprise. ... The DPEP segment includes significant lines of business like parks and experiences and consumer products.</Description>
                <CTALogoTwo src="/images-disney/images/cta-logo-two.png"></CTALogoTwo>
            </CTA>

        </Container>
    )
}

export default Login
const Container=styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;
    
    &:before{
        background-position:top;
        background-size:cover;
        background-image:url("/images-disney/images/login-background.jpg");
        background-repeat:no-repeat;
        content:"";
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        opacity:0.7;
        z-index:-1;
    }
`
const CTA=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:70%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
`
const CTALogoOne=styled.img`

`
const SignUp=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#191919;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background:#0483ee;
    }
`
const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const CTALogoTwo=styled.img`
    width:90%;
`