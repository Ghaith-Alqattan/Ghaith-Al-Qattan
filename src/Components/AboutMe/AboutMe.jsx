import React, { useContext } from 'react'
import Slider from '../Slider/Slider.jsx'
import './AboutMe.css'
import ThemeContext from '../Theme/Theme.jsx'
const AboutMe = ({ devName, devDesc }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={'About'}>
                <div className="AboutMe">
                    <div className="container">
                        <div className="title">
                            <h1
                                className={
                                    theme === 'dark' ? 'darkFont mainTitle' : 'mainTitle'
                                }
                            >
                                About Me
                            </h1>
                            <h2 className="devName">{devName}</h2>
                            <p className={theme === 'dark' ? 'darkFont devDesc' : 'devDesc'}>
                                {devDesc}
                            </p>
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default AboutMe
