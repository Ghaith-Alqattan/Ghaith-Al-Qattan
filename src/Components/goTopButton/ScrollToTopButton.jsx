import React, { useState, useEffect } from 'react'
import './ScrollToTopButton.css'
import arrow from '../../assets/ExperienceAssets/Vector.png'
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 1100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <button
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            style={{ transform: isVisible ? 'translateX(0)' : '' }}
        >
            <img src={arrow} alt="" />
        </button>
    )
}

export default ScrollToTopButton
