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

width: 30rem;
padding: 2rem;
border-radius: 1rem;
`;
const HeroInput = styled.input`
width: 30rem;
height: 3rem;
border: 1px solid orange;
margin-bottom: 1rem;
font-size: 2rem;

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

`;
const HeroLabel = styled.label`
  color: #F2F3F5;
  padding-bottom: 0.9rem;
  font-size: 2rem;
  font-family: 'Mynerve', cursive;
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