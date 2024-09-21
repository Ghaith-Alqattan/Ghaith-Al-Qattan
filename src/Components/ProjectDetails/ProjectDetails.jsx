import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import './ProjectDetails.css'
import demoArrow from '../../assets/ProjectsAssets/Icon.png'
import dot from '../../assets/projectDetailsAssets/dot.png'
import ThemeContext from '../Theme/Theme'
import fullScreen from '../../assets/projectDetailsAssets/Full_alt.png'
import WhiteDemoArrow from '../../assets/projectDetailsAssets/Icon (1).png'

const ProjectDetails = ({ projects }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { id } = useParams()
    const project = projects[id]
    const [isFullScreen, setIsFullScreen] = useState(false)
    const imgRef = useRef(null)

    const handleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen()
            setIsFullScreen(false)
        } else {
            imgRef.current.requestFullscreen().catch((err) => {
                console.error(
                    `Error attempting to enable full-screen mode: ${err.message}`
                )
            })
            setIsFullScreen(true)
        }
    }

    const handleDemoClick = () => {
        if (project.demoUrl) {
            window.open(project.demoUrl, '_blank')
        }
    }

    if (!project) {
        return <p>Project not found</p>
    }

    return (
        <div className="projectDetails">
            <div className="container">
                <div className="imageDetail">
                    <img
                        src={project.projectImage}
                        alt={project.projectName}
                        className="projectImage"
                        ref={imgRef}
                    />
                    <div className="pop">
                        <img
                            src={fullScreen}
                            alt="Fullscreen"
                            onClick={handleFullScreen}
                            style={{ cursor: 'pointer' }}
                        />
                        <img
                            src={WhiteDemoArrow}
                            alt="View Demo"
                            onClick={handleDemoClick}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
                <div className="text">
                    <div className="title">
                        <div className="titleInfo">
                            <h1 className={theme === 'dark' ? ' darkFont' : ''}>
                                {project.projectName}
                            </h1>
                            <p className="date">{project.date}</p>
                        </div>
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demoA"
                            >
                                <img src={demoArrow} alt="View Demo" className="demo" />
                            </a>
                        )}
                    </div>
                    <div className="content">
                        <p className={theme === 'dark' ? 'desc darkFont' : 'desc'}>
                            {project.description}
                        </p>
                        <div
                            className={
                                theme === 'dark' ? 'basicLangs darkFont' : 'basicLangs'
                            }
                        >
                            Basic Languages: {project.projectLanguages}
                        </div>
                        <div
                            className={theme === 'dark' ? 'frameWork darkFont' : 'frameWork'}
                        >
                            Framework: {project.framework}
                        </div>
                        <div
                            className={theme === 'dark' ? 'Libraries darkFont' : 'Libraries'}
                        >
                            Libraries: {project.libraries}
                        </div>
                    </div>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="githubRepo"
                    >
                        Github Repo
                    </a>
                </div>
            </div>
            <div className={theme === 'dark' ? 'detailsEnd' : 'detailsEnd'}>
                <hr className={theme === 'dark' ? 'd-darkHR' : 'd-lightHR'} />
                <p className={theme === 'dark' ? 'dot darkFont' : 'dot'}>
                    <img src={dot} alt="" />
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails
