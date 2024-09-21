import React, { useContext } from 'react'
import './Footer.css'
import ThemeContext from '../Theme/Theme'
const Footer = ({ Social }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <footer>
            <div className="container">
                <p className={theme === "dark" ? "darkFont rights" : "rights"}>@ 2024. All Rights Reserved</p>
                <p className={theme === "dark" ? "darkFont devName" : "devName"}>Develpoment by Ghaith</p>
                <ul className="social">
                    {Social.map((element, index) => {
                        return (
                            <a href={element.url} target='_blank' key={index}>
                                <img src={element.icon} className={`icon-${index}`} alt="" />
                            </a>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
