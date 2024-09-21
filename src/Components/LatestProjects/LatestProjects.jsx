import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './LatestProjects.css'
import arrow from '../../assets/ProjectsAssets/Vector.png'
import urlIcon from '../../assets/ProjectsAssets/Icon.png'
import ThemeContext from '../Theme/Theme'

const LatestProjects = ({ projects, GithubUrl }) => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    const goToProjectDetails = (index) => {
        navigate(`/project-details/${index}`)
    }

    return (
        <div className="projects">
            <div className="container">
                <div className="Title">
                    <div className="leftText">
                        <p>Portfolio</p>
                        <h1 className={theme === 'dark' ? 'darkFont' : ''}>
                            My Creative Works
                        </h1>
                        <h2 className={theme === 'dark' ? 'darkFont' : ''}>
                            Latest <span>Projects</span>
                        </h2>
                    </div>
                    <a href={GithubUrl} target="_blank" className="viewGithub">
                        View Github <img src={arrow} alt="" />
                    </a>
                </div>
                <div className="projectsContent">
                    {projects.map((element, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={element.projectImage} alt="" className="cardImage" />
                                <div className="content">
                                    <div className="contentText">
                                        <h3
                                            className={
                                                theme === 'dark'
                                                    ? 'darkFont projectName'
                                                    : 'projectName'
                                            }
                                        >
                                            {element.projectName}
                                        </h3>
                                        <p
                                            className={
                                                theme === 'dark' ? 'darkFont langUse' : 'langUse'
                                            }
                                        >
                                            {element.projectLanguages}
                                        </p>
                                    </div>
                                    <a onClick={() => goToProjectDetails(index)}>
                                        <img src={urlIcon} alt="" className="urlIcon" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LatestProjects
