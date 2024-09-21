import React, { useContext, useEffect, useState } from 'react'
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'
import ThemeContext from '../Theme/Theme'
import moon from '../../assets/NavBarAssets/moon.png'
import sun from '../../assets/NavBarAssets/Sun_fill.png'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
const DetailsNavBar = ({ logoLeftSide, logoRightSide, links }) => {
    const [closed, setClosed] = useState(true)
    const { theme, setTheme } = useContext(ThemeContext)
    const [themeIcon, setThemeIcon] = useState(moon)
    const [activeLink, setActiveLink] = useState('Home')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
            document.body.style.backgroundColor =
                savedTheme === 'dark' ? '#1b2431' : 'white'
            setThemeIcon(savedTheme === 'dark' ? sun : moon)
        }
    }, [setTheme])

    const toggleThemeIcon = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        setThemeIcon(newTheme === 'dark' ? sun : moon)
        document.body.style.backgroundColor =
            newTheme === 'dark' ? '#1b2431' : 'white'
    }

    const handleScroll = () => {
        const currentScrollY = window.scrollY
        if (currentScrollY > 0) {
            setActiveLink('Projects')
        }

        const navbar = document.querySelector('nav')
        const menu = document.querySelector('.navMenu')
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)'
            menu.style.boxShadow = '1px 0 0 0 rgba(0, 0, 0, 0.3)'
        } else {
            navbar.style.boxShadow = 'none'
            menu.style.boxShadow = 'none'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setClosed((prevClosed) => !prevClosed)
        document.body.style.overflow = closed ? 'hidden' : 'auto'
        const menu = document.querySelector('.navMenu')
        menu.style.transform = closed ? 'translateX(0)' : 'translateX(-150%)'
    }

    const scrollToTop = (pos, linkText) => {
        setTimeout(() => {
            window.scrollTo({
                top: pos,
                behavior: 'smooth',
            })
            setActiveLink(linkText)
            setClosed(true)
        }, 200)
    }

    return (
        <>
            <nav className={theme === 'dark' ? 'darkBG' : ''}>
                <div className="container">
                    <h1 className="logo">
                        <span>{logoLeftSide}</span>
                        <span className={theme === 'dark' ? 'darkFontColor' : ''}>
                            {logoRightSide}
                        </span>
                    </h1>
                    <ul className="links">
                        {links.map((element, index) => (
                            <li className={'link-' + element.linkText} key={index}>
                                <Link
                                    to="/"
                                    className={`${theme === 'dark' ? 'darkFontColor' : ''} ${activeLink === element.linkText ? 'active' : ''
                                        }`}
                                    onClick={() => scrollToTop(element.pos, element.linkText)}
                                >
                                    {element.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="icons">
                        <div className="menuIcon" onClick={toggleMenu}>
                            {closed ? (
                                <IoMenuOutline
                                    size={40}
                                    color={theme === 'dark' ? 'white' : ''}
                                />
                            ) : (
                                <IoCloseOutline
                                    size={40}
                                    color={theme === 'dark' ? 'white' : ''}
                                />
                            )}
                        </div>
                        <div className="themeMode" onClick={toggleThemeIcon}>
                            <img src={themeIcon} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            <ul
                className={theme === 'dark' ? 'darkBG navMenu' : 'navMenu'}
                style={{ transform: closed ? 'translateX(-150%)' : 'translateX(0%)' }}
            >
                {links.map((element, index) => (
                    <li
                        className={'link-' + element.linkText}
                        key={index}
                        onClick={() => scrollToTop(element.pos, element.linkText)}
                    >
                        <Link
                            to="/"
                            className={`${theme === 'dark' ? 'darkFont' : ''} ${activeLink === element.linkText ? 'active' : ''
                                }`}
                        >
                            {element.linkText}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DetailsNavBar
