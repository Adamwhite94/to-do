import styled from "styled-components";
import { device } from "../../Breakpoints/Breakpoints";

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }

const HeroContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;
const HeroElements = styled.div`
display:flex;
flex-direction: column;
align-items: center;

width: 30rem;
padding: 2rem;
border-radius: 1rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {

width: 20rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  
width: 20rem;
}

`;
const HeroInput = styled.input`
width: 30rem;
height: 3rem;
border: 1px solid orange;
margin-bottom: 1rem;
font-size: 2rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {

 width: 20rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  
  width: 20rem;
  }
`;
const HeroListContainer = styled.ul`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

gap: 1rem;
padding: 0;
`;
const HeroListElement = styled.button`
width: 50rem;
height: 4rem;
border-radius: 3rem;
background-color: #F2F3F5;
color: #111111;
font-weight: 1000;
font-size: 1.3rem;


&:hover{
  background-color: red;
  color:#fff;
  cursor:pointer
}



`;
const HeroLabel = styled.label`
  color: #F2F3F5;
  padding-bottom: 0.9rem;
  font-size: 2rem;
  font-family: 'Mynerve', cursive;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 1.5rem;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 2rem;
}
`;

const SubmitButton = styled.button`
margin-left: 0.4rem;
width: 6rem;
height: 3rem;
border-radius:10px;
background-color:#111111;
color: #F2F3F5;
font-weight: 1000;
border: 1px solid white;
cursor:pointer;
&:hover{
  background-color: white;
  color: #111111;
}
`;
const HeroInputContainer = styled.form`
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
 
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
`;

const TitleHeading = styled.h1`
font-size: 7rem;
height: 3rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 3rem;
  height: 1rem;
}

@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 3rem;
  height: 1rem;
}
`;

export {
    HeroContainer,
    HeroElements,
    HeroInput,
    HeroListContainer,
    HeroListElement,
    HeroLabel,
    SubmitButton,
    HeroInputContainer,
    TitleHeading
}