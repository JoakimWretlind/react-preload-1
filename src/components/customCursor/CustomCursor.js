import { useState, useEffect } from "react";
import { Cursor } from "./customCursor.style";

let classNames = require('classnames');


const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [linkHovered, setLinkHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event;
        setPosition({ x, y });
    };

    // onClick doesn't seem to work
    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
    });

    const cursorClasses = classNames("cursor", {
        "link-hovered": linkHovered,
        "clicked": clicked,
    });

    return (
        <>
            <Cursor
                className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
        </>
    )
};

export default CustomCursor;
