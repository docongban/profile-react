import React from 'react'

import './intro.css'
import Me from '../../image/me.png'

function Intro() {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-head">Hello, My name is</h2>
                <h1 className="intro-name">Ban</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">Web Developer</div>
                        <div className="intro-title-item">UI/UX Designer</div>
                        <div className="intro-title-item">Photographer</div>
                        <div className="intro-title-item">Editor</div>
                        <div className="intro-title-item">Writer</div>
                    </div>
                </div>
                <p className="intro-desc">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services and
                    online stores.
                </p>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg"></div>
            <img src={Me} alt="" className="intro-img" />
        </div>
    </div>
  )
}

export default Intro