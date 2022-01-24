import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Nav, NavUL, NavLink } from "./navbar.style";
import { navbarData } from './navbarData'

const Navbar = () => {
    const [isActive, setIsActive] = useState(0);

    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current, { top: "-20rem" }, { duration: 1, top: "0" }, 6)
    }, [])

    return (
        <>
            <Nav ref={navRef}>
                <NavUL>
                    {navbarData.map((item, index) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={() => setIsActive(index)}
                            className={`${index === isActive && 'active'}`}

                        >
                            {item.title}
                        </NavLink>
                    ))}
                </NavUL>
            </Nav>
        </>
    )
};

export default Navbar;
