import React, { useContext } from 'react'
import "./Experience.css"
import squares from "../../assets/ExperienceAssets/Images bg.svg"
import frame from "../../assets/ExperienceAssets/Frame 11.png"
import darkFrame from "../../assets/ExperienceAssets/darkFrame.png"
import ThemeContext from '../Theme/Theme'
const Experience = ({ leftSideDetails, rightSideDetails }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div className="Experience">
                <div className="container">
                    <img src={squares} alt="" className="firstExpSquare" />
                    <img src={squares} alt="" className="secondExpSquare" />
                    <div className="title">
                        <h4 className="specialHeading">Education and Experience</h4>
                        <h1 className={theme === "dark" ? "expTitle darkFont" : "expTitle"}>Education & Experience</h1>
                    </div>
                    <div className="expDetails">
                        <div className="expLeft">
                            <img src={theme === "dark" ? darkFrame : frame} alt="" className="expFrame" />
                            <div className="details">
                                {leftSideDetails.map((element, index) => {
                                    return (
                                        <div className={"detailsChild"} key={index}>
                                            <h3 className={theme === "dark" ? " darkFont" : ""}>{element.title}</h3>
                                            <p>{element.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="expRight">
                            <img src={theme === "dark" ? darkFrame : frame} alt="" className="expFrame" />
                            <div className="details">
                                {rightSideDetails.map((element, index) => {
                                    return (
                                        <div className={"detailsChild"} key={index}>
                                            <h3 className={theme === "dark" ? " darkFont" : ""}>{element.title}</h3>
                                            <p>{element.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience