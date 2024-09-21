import React, { useContext, useState } from 'react'
import './BestProjectsSlider.css'
import urlIcon from '../../assets/ProjectsAssets/Icon.png'
import arrowButton from '../../assets/projectDetailsAssets/Vector 2.svg'
import ThemeContext from '../Theme/Theme'

const BestProjectsSlider = ({ projects }) => {
    const { theme } = useContext(ThemeContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3

    const next = () => {
        if (currentIndex + itemsPerPage < projects.length) {
            setCurrentIndex(currentIndex + itemsPerPage)
        }
    }

    const prev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage)
        }
    }

    const isNextDisabled = currentIndex + itemsPerPage >= projects.length
    const isPrevDisabled = currentIndex === 0

    return (
        <div className="bestProjects">
            <div className="container">
                <div className="top">
                    <div className="title">
                        <p>Portfolio</p>
                        <h1 className={theme === 'dark' ? 'darkFont' : ''}>
                            The Best <span>Projects</span>
                        </h1>
                    </div>
                    <div className="buttons">
                        <button
                            className={`prev ${isPrevDisabled ? 'disabled' : ''}`}
                            onClick={prev}
                            disabled={isPrevDisabled}
                        >
                            <img src={arrowButton} alt="" />
                        </button>
                        <button
                            className={`next ${isNextDisabled ? 'disabled' : ''}`}
                            onClick={next}
                            disabled={isNextDisabled}
                        >
                            <img src={arrowButton} alt="" />
                        </button>
                    </div>
                </div>
                <div
                    className="projectsSlider"
                    style={{
                        transform: `translateX(-${(currentIndex / projects.length) * 100
                            }%)`,
                        display: 'flex',
                    }}
                >
                    {projects.map((project, index) => (
                        <div className="card" key={index}>
                            <img src={project.projectImage} alt="" />
                            <div className="content">
                                <div className="text">
                                    <h3
                                        className={
                                            theme === 'dark' ? 'projectName darkFont' : 'projectName'
                                        }
                                    >
                                        {project.projectName}
                                    </h3>
                                    <p className={theme === 'dark' ? 'darkFont' : ''}>
                                        {project.projectLanguages}
                                    </p>
                                </div>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={urlIcon} alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestProjectsSlider
