import React from 'react'
import styled,{keyframes} from 'styled-components'
import { small } from '../responsive'

const runningText =keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`

const Container=styled.div`
height: 2.5rem;
font-weight: 700;
color: yellow;
background-color: black;
overflow: hidden;
${small({height:"4rem"})}
&  p{
animation: ${runningText} 15s infinite linear;
width: 100%;
position: relative;
top: -5px;
}
`
export default function LowerAnnouncement() {
    return (
        <Container>
        <p style={{marginTop:"10px"}}>Big! big!! News : HURRY UP ! Grab sales at 60% OFF </p>
        <p style={{marginTop:"10px"}}>Big! big!! News : HURRY UP ! Grab sales at 60% OFF </p>
     </Container>
    )
}
