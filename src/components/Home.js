import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home
const Container=styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    &:before{
        background:url("/images-disney/images/home-background.png")  center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        z-index:-1;
    }
`
