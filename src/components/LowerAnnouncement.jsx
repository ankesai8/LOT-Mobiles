import React from 'react'
import styled,{keyframes} from 'styled-components'
import { small } from '../responsive'

const runningText =keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`
const colorChange=keyframes`
      0%  {background-color: #a68e75;}
     50% {background-color: #93c90b;}
    100% {background-color: #a68e75;}
`

const Container=styled.div`
height: 2.5rem;
font-weight: 700;
color: black;
background-color: #93c90b;
overflow: hidden;
${small({height:"4rem"})}
&  p{
animation: ${runningText} 15s infinite linear;
animation: ${colorChange} 15s infinite linear;
width: 100%;
position: relative;
top: -5px;
}
`


export default function LowerAnnouncement() {
    return (
        <Container>
        <p style={{marginTop:"10px"}}>Big! big!! News : Grab sales at 60% OFF </p>
     </Container>
    )
}
