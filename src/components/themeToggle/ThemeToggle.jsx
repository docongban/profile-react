import React, { useContext } from 'react'

import './themeToggle.css'
import Sun from '../../image/sun.png'
import Moon from '../../image/moon.png'
import { ThemeContext } from '../../ThemeContext'

function ThemeToggle() {
  const themeContext = useContext(ThemeContext)

  const handleToggle = () => {
    themeContext.dispatch({
      type: 'TOGGLE',
    })
  }
  return (
    <div className="themeToggle">
      <img src={Sun} alt="" className="themeToggle-icon" />
      <img src={Moon} alt="" className="themeToggle-icon" />
      <div
        className="themeToggle-button" 
        onClick={handleToggle}
        style={{left: themeContext.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default ThemeToggle