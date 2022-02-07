import React from "react";
import profileImage from "../images/profile-image.jpeg"

const Header = () => {
    return (
        <header className="header-section">
            <img src={profileImage} alt="Goku" />
            <h1>Son Goku</h1>
            <p className="job-role">Frontend Developer</p>
            <p className="website">www.dragonball.com</p>
            <div class="buttons">
                <button className="email-btn"><i class="fas fa-envelope"></i>Email</button>
                <button className="linkedin-btn"><i class="fab fa-linkedin"></i>LinkedIn</button>
            </div>
        </header>
    )
}

export default Header;