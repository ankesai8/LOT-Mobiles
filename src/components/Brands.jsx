import React from 'react'
import styled from 'styled-components'
 import Motorola from "../assets/Brands/clinique.jpg"
 import micromax from "../assets/Brands/maybelline.jpg"
 import apple from "../assets/Brands/loreal.jpg"
 import mi from "../assets/Brands/covergirl.jpg"
 import samsung from "../assets/Brands/nyx.png"
 import oppo from "../assets/Brands/colorpop.jpg"
import { BrandData } from '../data'
import { medium } from '../responsive'
import { Link } from 'react-router-dom'
const BrandContainer=styled.div`
margin-top:30px;
`
const Title=styled.div`
display:flex;
justify-content: center;
font-size: 1.5rem;
font-weight: 550;
letter-spacing: 2.5px;
`
const BrandOuter=styled.div`
margin: 2rem 10rem;
display: grid;
grid-template-columns: 1fr   ;
grid-gap:3rem;
${medium({margin:"2rem 0"})}
`
const BrandInner=styled.div`
display: flex;
height: 20rem;
background-color: #EFD9CE;
transition: all 0.2s linear;
box-shadow: 3px 3px 10px 7px #CEA2AC;
&:hover{
    transform: scale(1.1);
}
`

const BrandImage=styled.div`
flex: 2;
overflow:hidden;
`

const BrandText=styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 1rem;
`
const BrandTitle=styled.div`
font-size: 1.8rem;
letter-spacing: 4px;
`
const BrandPara=styled.div`
color: grey;
& p{
    line-height:1.3rem ;
}

`
const BrandButton=styled.div`
`
const Button=styled.button`
border: none;
cursor: pointer;
padding: 10px;
background-color:black ;
    color: whitesmoke;

&:hover{
    background-color:whitesmoke ;
    color: black;
}
`


export default function Brands() {
  let brandArray=[Motorola,micromax,apple,mi,samsung,oppo]
  let i=-1;
    return (
        <BrandContainer>
        <hr/>
        <Title>
             Brands We Feature
        </Title>
        <BrandOuter>
        {BrandData.map((brand)=>{
            i++;
        return(
        <BrandInner>
              <BrandImage>
                 <img src={brandArray[i]} height="430rem" width="100%"  style={{objectFit:"cover"}}  alt="Motorola"   />
             </BrandImage>
             <BrandText>
                <BrandTitle>
                {brand.brandName}
                </BrandTitle>
                <BrandPara>
                <p>{brand.description}</p>               
                </BrandPara>
                <BrandButton>
                <Button>
                  <Link style={{textDecoration:"none" ,color:"inherit"}} to={`/products/brand/${brand.searchName}`}> <h3>Shop Now</h3></Link>
                </Button>
                </BrandButton>
             </BrandText>
        </BrandInner>
        )})}
        </BrandOuter>
        </BrandContainer>
    )
}
