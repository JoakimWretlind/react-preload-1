import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`;

export const Header = styled.h2`
    font-size: clamp(2.2rem, 20vw, 14rem);
    letter-spacing: clamp(.2rem, 4vw, 2rem);
    text-transform: uppercase;
    color: #222;
`;