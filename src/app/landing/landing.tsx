import tp_logistic_logo from '../assets/tp-logistic-logo.svg'
import  landing_logistic_intro from '../assets/landing-logistic-intro.svg'

import './landing.css'
export default function Landing (){
    return (
    <div>
        <div id="landing-first-view">
        <div id="landing-header">
            <img  id="landing-logo" src={tp_logistic_logo} alt="Truong Phat Logo"/>
            <div id='landing-navigation'>
                <h4 className='landingNavigationSection'>About Us</h4>
                <h4 className='landingNavigationSection'>Services</h4>
                <h4 className='landingNavigationSection'>News</h4>
                <h4 className='landingNavigationSection'>Price</h4>
                <h4 className='landingNavigationSection'>Contact Us</h4>
            </div>
        </div>

        <div id = "landing-intro">
            <div id = "landing-intro-text">
                <h2>PRESTIGE, PROFESSIONAL, EFFECTIVE</h2>
                <h5>Proud that 95% of Truong Phat's customers are long-term customers, have trusted and attached to Truong Phat for 7 years or more.</h5>
                <div id="landing-intro-buttons">
                    <button className="positiveButton appButton">
                        It's is free, contact us
                    </button>
                    <div style={{width:"2%"}} />
                    <button className='negativeButton appButton'>
                        Read more
                    </button>
                </div>
            </div>
            <img id='landing-logistic-intro-image' src={landing_logistic_intro} alt='Landing Intro'/>
        </div>

        <p id="landing-under-intro-text">Always be an honest, enthusiastic and reliable companion for all domestic and international import and export enterprises.</p>
        </div>
    </div>
    )
}