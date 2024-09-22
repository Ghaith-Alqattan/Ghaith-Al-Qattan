import React from 'react'
import './RiskContact.css'
import arrow from '../../assets/RiskContactAssets/Vector.png'
import lines from '../../assets/RiskContactAssets/LInes (1).svg'
const RiskContact = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 4800,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <div className="riskContactContainer">
                <img src={lines} alt="" className="riskLines" />
                <div className="riskText">
                    <div className="left">
                        <h1 className="riskH1">Try me out, risk free!</h1>
                        <p className="riskDesc">
                            If you’re not happy with the design after the first draft, I’ll
                            refund your deposit,
                            <span className="riskSpan"> no questions asked</span>
                        </p>
                    </div>
                    <button className="riskButton" onClick={scrollToTop}>
                        Contact <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default RiskContact
