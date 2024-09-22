import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import AboutMe from '../../Components/AboutMe/AboutMe'
import Education from '../../Components/Experience/Experience'
import Contact from '../../Components/Contact/Contact'
import LatestProjects from '../../Components/LatestProjects/LatestProjects'
import RiskContact from '../../Components/RiskContact/RiskContact'
import ScrollToTopButton from '../../Components/goTopButton/ScrollToTopButton'
import Footer from '../../Components/Footer/Footer'

import moonIcon from '../../assets/NavBarAssets/moon.png'
import heroLines from '../../assets/heroAssets/Lines.svg'
import heroGradiant from '../../assets/heroAssets/Blur Gradient.png'
import DarkGradiant from '../../assets/heroAssets/Dark Blur Gradient (1).png'
import heroCircle from '../../assets/heroAssets/Circle.png'
import heroSquares from '../../assets/heroAssets/squers  - option 1.svg'
import ghaithImage from '../../assets/heroAssets/Ghaith_Portfolio_image-removebg.png'
import ThemeContext from '../../Components/Theme/Theme'
import phone from '../../assets/ContactAssets/Vector (1).png'
import mail from '../../assets/ContactAssets/Vector (2).png'
import location from '../../assets/ContactAssets/Frame.png'
import instagram from '../../assets/FooterAssets/instagram (1).png'
import facebook from '../../assets/FooterAssets/facebook.png'
import linkedIn from '../../assets/FooterAssets/linkedin (1).png'
import telegram from '../../assets/FooterAssets/Telegram-removebg-preview.png'
import leon from "../../assets/ProjectsAssets/Leon Project Image.png"
import Trippy from "../../assets/ProjectsAssets/Trippy Project Image.png"
import engBurger from "../../assets/ProjectsAssets/Eng Burger Project Image.png"
import Edugar from "../../assets/ProjectsAssets/Edugar Image.png"
import DashStack from "../../assets/ProjectsAssets/dashstack.png"
import './Home.css'

const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const scrollToTopBtn = document.getElementById('scrollToTopBtn')
    window.onscroll = function () {
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            scrollToTopBtn.style.display = 'block'
        } else {
            scrollToTopBtn.style.display = 'none'
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar
                logoLeftSide="G"
                logoRightSide="HQ"
                links={[
                    { linkText: 'Home', pos: 0, mobilePos: 0 },
                    { linkText: 'About me', pos: 600, mobilePos: 700 },
                    { linkText: 'Education', pos: 1150, mobilePos: 1150 },
                    { linkText: 'Projects', pos: 2120, mobilePos: 2100 },
                    { linkText: 'Contact', pos: 3210, mobilePos: 5270 },
                ]}
            />

            <Hero
                lines={heroLines}
                gradiant={theme === 'dark' ? DarkGradiant : heroGradiant}
                titleName="Ghaith"
                desc="Agency-quality Webflow websites with the personal touch of a freelancer."
                circle={heroCircle}
                squares={heroSquares}
                portfolioImage={ghaithImage}
            />

            <AboutMe
                devName="Ghaith Al-Qattan"
                devDesc="A FrontEnd Developer with 1+ year of Experience and a Student at the 3RD year of Computer Engineering and Automation at Damascus University"
            />

            <Education
                leftSideDetails={[
                    {
                        title: 'Front-End Developer',
                        desc: 'A front-end web developer with one year+ experience and proficient in the React.JS library and many other Libraries and Frameworks.',
                    },
                    {
                        title: 'Advanced ambition',
                        desc: 'Advanced ambition to excel in programming languages, as I delved into the basics of 5 programming languages ​​and excelled in 3 programming languages.',
                    },
                ]}
                rightSideDetails={[
                    {
                        title: 'Computer Engineering',
                        desc: 'Studying 3RD year of Computer Engineering and Automation at damascus University.',
                    },
                    {
                        title: 'Experience and intuition in solving problems',
                        desc: 'Experience and intuition in solving programming problems and taking appropriate solutions in the most logical form of the code.',
                    },
                ]}
            />

            <RiskContact />

            <LatestProjects
                projects={[
                    {
                        projectImage: leon,
                        projectName: 'Business Platform',
                        projectLanguages: 'Html-Css3-Bootstrap',
                    },
                    {
                        projectImage: Trippy,
                        projectName: 'Trips Platform',
                        projectLanguages: 'Html-Css3-javscript',
                    },
                    {
                        projectImage: engBurger,
                        projectName: 'Restaurant',
                        projectLanguages: 'Html-Css3-BootStrap',
                    },
                    {
                        projectImage: Edugar,
                        projectName: 'Educational Platform',
                        projectLanguages: 'Html-Css3-javscript',
                    },
                    {
                        projectImage: DashStack,
                        projectName: 'E-Commerence',
                        projectLanguages: 'Html-Css3-JavaScript',
                    }
                ]}
                GithubUrl="https://github.com/Ghaith-Alqattan"
            />

            <Contact
                Social={[
                    { icon: phone, socialDesc: 'Call me', socialData: '+963944520044' },
                    {
                        icon: mail,
                        socialDesc: 'Email me',
                        socialData: 'ghaith.alqattan04@gmail.com',
                    },
                    {
                        icon: location,
                        socialDesc: 'Address',
                        socialData: 'Damascus,Syria',
                    },
                ]}
            />

            <ScrollToTopButton />

            <Footer
                Social={[
                    {
                        icon: facebook,
                        url: 'https://www.facebook.com/profile.php?id=100012075555248&mibextid=ZbWKwL',
                    },
                    { icon: telegram, url: 'http://t.me/ghaith_alqattan' },
                    {
                        icon: linkedIn,
                        url: 'https://www.linkedin.com/in/ghaith-al-qattan-206110292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    },
                    {
                        icon: instagram,
                        url: 'https://www.instagram.com/ghaith_alqattan?igsh=ZnkwN3kxYXJ1Nmky',
                    },
                ]}
            />
        </>
    )
}

export default Home
