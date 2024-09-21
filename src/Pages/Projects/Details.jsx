import React, { useEffect } from 'react'
import DetailsNavBar from '../../Components/DetailsNavBar/DetailsNavBar'
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails'
import BestProjectsSlider from '../../Components/BestProjectsSlider/BestProjectsSlider'
import Footer from '../../Components/Footer/Footer'
import instagram from '../../assets/FooterAssets/instagram (1).png'
import facebook from '../../assets/FooterAssets/facebook.png'
import linkedIn from '../../assets/FooterAssets/linkedin (1).png'
import telegram from '../../assets/FooterAssets/Telegram-removebg-preview.png'
import leon from "../../assets/ProjectsAssets/Leon Project Image.png"
import Trippy from "../../assets/ProjectsAssets/Trippy Project Image.png"
import engBurger from "../../assets/ProjectsAssets/Eng Burger Project Image.png"
const projects = [
    {
        projectImage: leon,
        projectName: 'Leon Business Company',
        date: '10/3/2022',
        demoUrl: 'https://ghaith-alqattan.github.io/Leon-Company/',
        description:
            ' A global technology company that provides all electronic services with very high quality and ideal efficiency. It contains all web services such as back-end, front-end, UI and UX, and provides Photoshop services and creative designs.',
        projectLanguages: 'HTML, Pure CSS3 ',
        framework: '',
        libraries: '',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Leon-Company',
    },
    {
        projectImage: Trippy,
        projectName: 'Trippy Tourism Platform',
        date: '29/7/2024',
        demoUrl: 'https://trippy-pink.vercel.app/',
        description: 'A global platform that provides electronic tourism services around the world, including plane and hotel reservations with the most expensive and luxurious ratings.',
        projectLanguages: 'HTML, CSS, JavaScript',
        framework: 'Tailwind',
        libraries: 'React.js',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Trippy',

    },
    {
        projectImage: engBurger,
        projectName: 'ENG Burger Restaurant',
        date: '13/5/2023',
        demoUrl: 'https://ghaith-alqattan.github.io/Eng-Burger/',
        description: 'An electronic platform for ENG Burger Restaurant that links the electronic service with the restaurant’s distinguished services, such as delivery, special requests, reservations, and appointments.',
        projectLanguages: 'HTML, CSS, BootStrap',
        framework: 'Bootstrap',
        libraries: '',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Eng-Burger',
    },
    {
        projectImage: Trippy,
        projectName: 'Trippy Tourism Platform',
        date: '29/7/2024',
        demoUrl: 'https://trippy-pink.vercel.app/',
        description: 'A global platform that provides electronic tourism services around the world, including plane and hotel reservations with the most expensive and luxurious ratings.',
        projectLanguages: 'HTML, CSS, JavaScript',
        framework: 'Tailwind',
        libraries: 'React.js',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Trippy',
    },
    {
        projectImage: engBurger,
        projectName: 'ENG Burger Restaurant',
        date: '13/5/2023',
        demoUrl: 'https://ghaith-alqattan.github.io/Eng-Burger/',
        description: 'An electronic platform for ENG Burger Restaurant that links the electronic service with the restaurant’s distinguished services, such as delivery, special requests, reservations, and appointments.',
        projectLanguages: 'HTML, CSS, BootStrap',
        framework: 'Bootstrap',
        libraries: '',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Eng-Burger',
    },
    {
        projectImage: leon,
        projectName: 'Leon Business Company',
        date: '10/3/2022',
        demoUrl: 'https://ghaith-alqattan.github.io/Leon-Company/',
        description:
            ' A global technology company that provides all electronic services with very high quality and ideal efficiency. It contains all web services such as back-end, front-end, UI and UX, and provides Photoshop services and creative designs.',
        projectLanguages: 'HTML, Pure CSS3 ',
        framework: '',
        libraries: '',
        githubUrl: 'https://github.com/Ghaith-Alqattan/Leon-Company',
    },
    {
        projectName: 'Education Platform7',
        date: '29/7/2024',
        demoUrl: 'https://example.com/demo2',
        description: 'A platform for interactive learning.',
        projectLanguages: 'HTML, CSS, JavaScript',
        framework: 'Bootstrap',
        libraries: 'React.js',
        githubUrl: 'https://github.com/Ghaith-Alqattan/edujar',
    },
    {
        projectName: 'Education Platform8',
        date: '29/7/2024',
        demoUrl: 'https://example.com/demo2',
        description: 'A platform for interactive learning.',
        projectLanguages: 'HTML, CSS, JavaScript',
        framework: 'Bootstrap',
        libraries: 'React.js',
        githubUrl: 'https://github.com/Ghaith-Alqattan/edujar',
    },
]

const Details = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0.0000001)
    }, [])
    return (
        <>
            <DetailsNavBar
                logoLeftSide="G"
                logoRightSide="HQ"
                links={[
                    { linkText: 'Home' },
                    { linkText: 'About me' },
                    { linkText: 'Education' },
                    { linkText: 'Projects', pos: 0 },
                    { linkText: 'Contact' },
                ]}
            />
            <ProjectDetails projects={projects} />
            <BestProjectsSlider projects={projects} />
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

export default Details