import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web developmet</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Facebook ads", "Google ads"]} 
                typeSpeed={60}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
