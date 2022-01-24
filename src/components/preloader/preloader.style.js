import styled, { keyframes } from 'styled-components';

export const PreloaderPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 10vw);
`;

export const Square = styled.div`
  &.squareThree{
      background: #111;
      aspect-ratio: 1 / 1;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;




const coundownAnimation = keyframes`
    0%{opacity: 1}
    85%{opacity: 1}
    100%{opacity: 0}
`

export const Input = styled.input`
    opacity: 0;
    width: 5.5rem;
    padding-top: .1rem;
    padding-left: 1.8rem;
    outline: none;
    font-family: 'Cormorant Garamond', serif;
    border: none;
    font-size: clamp(2.1rem, 20vw, 8.2rem);
    letter-spacing: .5rem;
    text-align: center;
    background: transparent;
    color: #f1f1f1;
    animation-name: ${coundownAnimation};
    animation-duration: 4.3s;
`;

export const CountDown = styled.h3`
    opacity: 0;
    color: #f1f1f1;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 20vw, 8rem);
    font-weight: 300;
    letter-spacing: .5rem;
    text-transform: capitalize;
    animation-name: ${coundownAnimation};
    animation-duration: 4.5s;
`;


