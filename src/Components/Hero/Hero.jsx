import React, { useContext } from 'react'
import './Hero.css'
import dot from '../../assets/heroAssets/dot.png'
import ThemeContext from '../Theme/Theme'
import GhaithCv from '../../assets/heroAssets/Ghaith AlQattan Cv (1).pdf'
const Hero = ({
    lines,
    gradiant,
    titleName,
    desc,
    circle,
    squares,
    portfolioImage,
}) => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <div className={'hero'}>
                <img src={lines} className="linesBG" alt="" />
                <div className="container">
                    <div className="heroContent">
                        <div className="leftSide">
                            <img src={gradiant} className="gradiantBG" alt="" />
                            <div className="leftSideContent">
                                <h1 className={theme === 'dark' ? 'darkFont title ' : 'title'}>
                                    HEY!{' '}
                                    <span
                                        className={
                                            theme === 'dark' ? 'darkFont titleSpan' : 'titleSpan'
                                        }
                                    >
                                        I'm {titleName}, Frontend Developer
                                    </span>
                                </h1>
                                <p className={theme === 'dark' ? 'desc darkFont' : 'desc'}>
                                    {desc}
                                </p>
                                <a
                                    download={GhaithCv}
                                    className={theme === 'dark' ? 'darkButton darkFont cv' : 'cv'}
                                >
                                    Download Cv
                                </a>
                            </div>
                        </div>
                        <div className="rightSide">
                            <img className="circle" src={circle} alt="" />
                            <img className="square" src={squares} alt="" />
                            <img className="ghaith" src={portfolioImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={theme === 'dark' ? 'heroEnd darkFont' : 'heroEnd'}>
                <hr className={theme === 'dark' ? 'darkHR' : 'lightHR'} />
                <p className={theme === 'dark' ? 'dot darkFont' : 'dot'}>
                    <img src={dot} alt="" />
                </p>
            </div>
        </>
    )
}

export default Hero
