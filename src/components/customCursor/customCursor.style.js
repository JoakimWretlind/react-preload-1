import styled from 'styled-components';

export const Cursor = styled.div`
    position: fixed;
    top: 10rem;
    left: 10rem;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 100%;
    //background: #f00;
    // opposite to red
    background: #00FFFF;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all .25s ease-out;
    transition-property: background-color, opacity, transform, mix-blend-mode;    
    z-index: 9999;
    mix-blend-mode: difference;
    
    
    &.link-hovered{
        transform: translate(-50%, -50%) scale(7);
        background-color: #fefefe;
        mix-blend-mode: difference;
    }
    &.link-clicked{
        transform: translate(-50%, -50%) scale(0.5);
        background-color: green;
    }
    &.clicked{
        transform: translate(-50%, -50%) scale(1);
        background-color: violet;
    }
`;