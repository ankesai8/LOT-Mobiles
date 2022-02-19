import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import LowerAnnouncement from '../components/LowerAnnouncement'
import Navbar from '../components/Navbar'
import UpperAnnouncement from '../components/UpperAnnouncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { medium,large } from '../responsive'
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router'
import { ToastContainer,Toast } from 'react-bootstrap'
import axios from 'axios'


const Maincontainer=styled.div`
background-color:whitesmoke;
`

const TopButtons=styled.div`
display: flex;
justify-content: space-between;
margin: 2rem 8rem;
${medium({margin:"2rem 1rem"})}
`
const Container=styled.div`
margin: 2rem 8rem;
display: flex;
gap: 2rem;
${large({margin:"2rem 1rem",gap:"0"})}
${medium({flexDirection:"column"})}
`


const Button=styled.button`
border: none;
background-color: black;
color: white;
padding:10px;
cursor: pointer;
margin: 1rem;

&:hover{
    background-color: white;
    border: 2px solid black;
    color: black;
}



`
const OrderContainer=styled.div`
display: flex;
flex-direction: column;
background-color: white;
width: 75%;
height: 100%;
gap: 2rem;
${medium({width:"100%"})}
`
const SummaryContainer=styled.div`
background-color: white;
padding: 18px;
width: 25%;
height: 100%;
${medium({width:"100%"})}
`

const SummaryLine=styled.div`
display:flex ;
justify-content: space-between;
margin-top: 1rem;
`

export default function Cart() {
  
    const cart=useSelector(state=>state.cart)
    const [stripeToken,setStripeToken]= useState(null)
    const history=useHistory();
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const [alert,setAlert]=useState(false)
    const onToken=(token)=>{
        console.log(token)
        setStripeToken(token)
    }
   

    useEffect(() => {
        const makeRequest = async () => {
          try {
              console.log(cart.total)
            const res = await axios.post("https://makeyouup-server.herokuapp.com/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            },{
                headers:
                {
                    token:user.currentUser.token
                }
            });
            dispatch({type:"emptyCart"})
            history.push("/success", {
              stripeData: res.data,
              products: cart, });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken]);

    return (
        <>
        <ToastContainer position="bottom-end">
            <Toast bg={"danger"} style={{width:"15rem" ,height:"3rem",padding:"5px"}} onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
                Please Log in to proceed to checkout
            </Toast>
            </ToastContainer>
        <Maincontainer>
            <UpperAnnouncement/>
            <Navbar/>
            <LowerAnnouncement/>
            <TopButtons>
                <div>
                   <Link to="/products"> <Button>Continue To Shop</Button></Link>
                </div>
                <div>
                    <h1>Your Cart</h1>
                </div>
                <div>
               
                </div>
            </TopButtons>
            <Container>
            {cart.products.length >0 ?
            <>
            <OrderContainer>
                <CartItem/>
            </OrderContainer>
                <SummaryContainer>
                    <div><h3>SUMMARY</h3></div>
                    <SummaryLine >
                        <div>SubTotal</div>
                        <div> ${cart.total}</div>
                    </SummaryLine>
                    <SummaryLine >
                        <div>Shipping</div>
                        <div> $5</div>
                    </SummaryLine>
                    <SummaryLine >
                        <div>Shipping Discount</div>
                        <div> - $5</div>
                    </SummaryLine>
                    <SummaryLine >
                        <div>Total</div>
                        <div> ${cart.total}</div>
                    </SummaryLine>
                    <div>
                        {user.currentUser ?
                        <StripeCheckout
                        name="Shop-Cart"
                        image="https://in.images.search.yahoo.com/images/view;_ylt=AwrwS2DRgBBizBMANhwO9olQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkwOWQ5NGM4MjI5MTY4YWNjYzZjNTEzOTlhMzc4OTdhBGdwb3MDODMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dshop%2Bcart%2Blogo%26ei%3DUTF-8%26type%3D87infr0srvimo2001120%26fr%3Dyhs-omr-001%26hsimp%3Dyhs-001%26hspart%3Domr%26param1%3Dy6bdVFVIsvuYsgEClQfz8I7gEdb7af9GSy3VsrdP%252BKIXhco7CZqVDwZ2NxTWPZsilmfYcLnBIe9wEP0Es3UUq%252BTvBofTWFOrVFYGN%252Fm%252B5%252B39k7Ju1zTYub3PzAar5yJ8cxouzoUBePzpqxoGMk9FXThZUN%252FHIutOepldfuBn0OGwGs9y0I6YjGq7bwom4Qz5ll2tjYGlTxX7RHmBrzpXVsLAW0Hu7oiQOPpbRYEPDgihojHoxlrYoKSelxwsj6B65WDIlgGCixSnxDq9W8PnI1gIt2WOqQ%252BXJALrWfuAeKTCYzfbZVAn1C3njQybogm2mwj14mtrvA2t46spT%252Bv9YGWV8cMiQqTvygiOFWe5in2Cezo2%252F8uNE5QRaTSiQJ0hxwQ4Kd3vA%252F0%252FKKU3Lljing%253D%253D%26nost%3D1%26tab%3Dorganic%26ri%3D83&w=900&h=940&imgurl=www.clipartkey.com%2Fmpngs%2Fm%2F25-256300_circle-shopping-cart-logo.png&rurl=https%3A%2F%2Fwww.clipartkey.com%2Fview%2FixToTb_circle-shopping-cart-logo%2F&size=63.0KB&p=shop+cart+logo&oid=909d94c8229168accc6c51399a37897a&fr2=&fr=yhs-omr-001&tt=Circle+Shopping+Cart+Logo+%2C+Free+Transparent+Clipart+-+ClipartKey&b=61&ni=120&no=83&ts=&tab=organic&sigr=7s.51yCCrwoP&sigb=ZeRm2SNLfFNJ&sigi=fWbRdt01ABpw&sigt=Y1N0uEsfyuN1&.crumb=4YTQVgG.te0&fr=yhs-omr-001&hsimp=yhs-001&hspart=omr&type=87infr0srvimo2001120&param1=y6bdVFVIsvuYsgEClQfz8I7gEdb7af9GSy3VsrdP%2BKIXhco7CZqVDwZ2NxTWPZsilmfYcLnBIe9wEP0Es3UUq%2BTvBofTWFOrVFYGN%2Fm%2B5%2B39k7Ju1zTYub3PzAar5yJ8cxouzoUBePzpqxoGMk9FXThZUN%2FHIutOepldfuBn0OGwGs9y0I6YjGq7bwom4Qz5ll2tjYGlTxX7RHmBrzpXVsLAW0Hu7oiQOPpbRYEPDgihojHoxlrYoKSelxwsj6B65WDIlgGCixSnxDq9W8PnI1gIt2WOqQ%2BXJALrWfuAeKTCYzfbZVAn1C3njQybogm2mwj14mtrvA2t46spT%2Bv9YGWV8cMiQqTvygiOFWe5in2Cezo2%2F8uNE5QRaTSiQJ0hxwQ4Kd3vA%2F0%2FKKU3Lljing%3D%3D"
                        billingAddress
                        shippingAddress
                        description={`Your  Total Cart is $ ${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey="pk_test_51JpnsFSJXTWe5Zf11N05XLzTKIGjBGK5H030E43f2cOWiJnaGM6fXqHt7FMEqLEs6BqbjZosPSLxGWgblW8V04CU00CSqFgR2n">
                        <Button>Checkout
                        </Button>
                        </StripeCheckout>
                        :
                        <>
                        <Button onClick={()=>{setAlert(true)}}>checkOut</Button>
                        </>}</div>
                        <div style={{color:"yellow green"}}>
                            <p>credentials to checkout:</p><br>
                            <p>card number: <b>4242424242424242</b></p><br>
                            <p>Expiry:<b>02/22</b></p><br>                  
                            <p>CVV: <b>222</b></p><br>
                        </div>
                </SummaryContainer>
              </>:<><h2  style={{textAlign:"center" ,width:"100%"}}>Your Cart is empty</h2></>}
            </Container>

            <Newsletter/>
            <Footer/>
        </Maincontainer>
        </>
    )
}
