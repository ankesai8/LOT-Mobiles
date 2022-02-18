import { Email, EmailOutlined, LinkedIn, LocationCity, Phone, PhoneAndroidOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {medium, small} from "../responsive"

const MainContainer=styled.div`
height: 100%;
background-color: black;
color: white;
`
const InnerContainer=styled.div`
display:flex;
justify-content: space-between;
padding: 1rem;
gap:3rem;
${small({display:"inline"})}
`
const Left=styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex:2;
`
const Right=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex:1;
`
const OwnerDiv=styled.div`
display: flex;
height: 2rem;
background-color: black;
color: white;
align-items: center;
justify-content: space-between;
${medium({display:"none"})}
`

export default function Footer() {
    return (
        <>
        <MainContainer>
            <InnerContainer>
                <Left>
                    <div><h2 style={{textAlign:"start"}}>Shop-Cart</h2></div>
                    <div><p>Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.It is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase "lorem ipsum" can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections.</p></div>
                </Left>
                <Right>
                <div><h2 style={{textAlign:"start"}}>Contact Us</h2></div>
                <div><p><LocationCity/> Hyderabad,Telangana.</p></div>
                <div><p><Email/> shopcart@gmail.com</p></div>
                <div><p><Phone/> +91-9966339966</p></div>
                </Right>
            </InnerContainer>
        </MainContainer>
        <OwnerDiv>
            <div>
            </div>
            <div className="d-flex gap-1">
                <div><EmailOutlined/>shopcart@gmail.com</div>
                <div><LinkedIn/>www.linkedin.com/in/</div>
                <div><PhoneAndroidOutlined/>+91-9966339966</div>
            </div>
        </OwnerDiv>
        </>
    )
}
