import React, { useContext } from 'react'
import './Contact.css'
import ThemeContext from '../Theme/Theme'
const Contact = ({ Social }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="title">
                        <p>Contact</p>
                        <h1 className={theme === 'dark' ? 'darkFont' : ''}>
                            Let's Discuss Your <span>Project</span>
                        </h1>
                    </div>
                    <form>
                        <div className="formContent">
                            <div className="leftSocial">
                                {Social.map((element, index) => {
                                    return (
                                        <div className="socialCard" key={index}>
                                            <div className="icon">
                                                <img src={element.icon} alt="" />
                                            </div>
                                            <div className="text">
                                                <p>{element.socialDesc}</p>{' '}
                                                <h4 className={theme === 'dark' ? 'darkFont' : ''}>
                                                    {element.socialData}
                                                </h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="rightContact">
                                <input type="text" className="name" placeholder="Full Name" />
                                <input
                                    type="email"
                                    className="email"
                                    placeholder="Your Email"
                                />
                                <input type="tel" className="tel" placeholder="Phone Number" />
                                <textarea placeholder="Message"></textarea>
                                <input type="submit" value="Send Message" className="send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
