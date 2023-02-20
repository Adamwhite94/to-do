import styled from "styled-components";

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
background-color: #ffffff  ;
width: 30rem;
padding: 2rem;
border-radius: 1rem;
`;
const HeroInput = styled.input`
width: 15rem;
border: 1px solid orange;
margin-bottom: 2rem;

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
width: 10rem;
height: 2rem;
border-radius: 3rem;
background-color:#111111;
color: #F2F3F5;
font-weight: 1000;
`;
const HeroLabel = styled.label`
  color: #F2F3F5;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  font-family: 'Mynerve', cursive;
`;

const SubmitButton = styled.button`
margin-left: 0.4rem;
width: 6rem;
height: 2rem;
border-radius: 3rem;
background-color:#111111;
color: #F2F3F5;
font-weight: 1000;
border: 1px solid white;
cursor:pointer;
`;
const HeroInputContainer = styled.div``;

export {
    HeroContainer,
    HeroElements,
    HeroInput,
    HeroListContainer,
    HeroListElement,
    HeroLabel,
    SubmitButton,
    HeroInputContainer
}