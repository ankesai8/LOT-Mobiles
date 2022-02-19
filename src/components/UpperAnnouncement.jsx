import React from 'react'
import styled,{keyframes} from 'styled-components'

const colorChange=keyframes`
      0%  {background-color: whitesmoke;}
     50% {background-color: black;}
    100% {background-color: yellow;}
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
