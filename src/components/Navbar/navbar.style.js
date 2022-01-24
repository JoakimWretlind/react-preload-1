import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 22rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
`;

export const NavLink = styled(Link)`
    color: #222;
    font-size: 1.4rem;
    letter-spacing: .3rem;
    text-transform: capitalize;
    border-bottom: .1rem solid transparent;
    transition: .25s ease-out;
    padding: 0 .3rem;
    &:hover{
        cursor: pointer;
        color: #000;
        border-bottom: .1rem solid #fff;
    }
    &.active{
        border-bottom: .1rem solid #222;
    }
`;