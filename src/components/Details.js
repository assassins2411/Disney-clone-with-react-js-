import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Details() {
    return (
     
        
        <Container>
            <Background>
                <img src='https://i.pinimg.com/originals/c5/58/da/c558da170075278a8f7090b7d81eaec9.jpg'/>
            </Background>
            <ImageTitle>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='images-disney/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='images-disney/images/play-icon-white.png'/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddwatchButton>
                    <span>+</span>
                </AddwatchButton>
                <GroupButton>
                    <img src='/images-disney/images/group-icon.png'/>
                </GroupButton>
            </Controls>
            <SubTitle>
                2018 # 7m # Family,Fantasy,Kids,Animation
            </SubTitle>
            <Description>
            A tale which follows the comedic and eventful journeys of two fish, the fretful Marlin and his young son Nemo, who are separated from each other in the Great Barrier Reef when Nemo is unexpectedly taken from his home and thrust into a fish tank in a dentist's office overlooking Sydney Harbor.
            </Description>
        </Container>
       
    )
}

export default Details
const Container=styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`
const Background =styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
    }
`
const ImageTitle=styled.div`
    height:30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
    margin-top:70px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls=styled.div`
    display:flex;
     
`
const PlayButton=styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
        background:rgb(198,198,198);
    }
`
const TrailerButton=styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`
const AddwatchButton=styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }
`
const GroupButton=styled(AddwatchButton)`
    background:rgb(0,0,0);
`
const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`
const Description=styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
`
