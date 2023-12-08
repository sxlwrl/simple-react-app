import React, { useState } from "react";

function Header() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const changeBackground = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setBackgroundColor(randomColor);
    };

    return (
        <header>
            <h2 id="first" style={{ backgroundColor: backgroundColor }} onClick={changeBackground}>
                Казак Вадим Сергійович
            </h2>
        </header>
    );
}

export default Header;
