import React from 'react'
import styled,{keyframes} from 'styled-components'

const colorChange=keyframes`
      0%  {background-color: #a68e75;}
     50% {background-color: #93c90b;}
    100% {background-color: #a68e75;}
`

const Container=styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
animation: ${colorChange} 4s infinite linear;
color: white;
`


export default function UpperAnnouncement() {
    return (
        <Container>
           <div style={{marginTop:"10px"}}> <p>GREAT INDIAN SALE!!! upto 60% OFF </p></div>
        </Container>
    )
}
