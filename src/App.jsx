import React, { useContext } from 'react'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import ProductList from './components/productList/ProductList'
import ThemeToggle from './components/themeToggle/ThemeToggle'
import { ThemeContext } from './ThemeContext'

function App() {
  const themeContext = useContext(ThemeContext)
  const darkMode = themeContext.state.darkMode
  return (
    <div style={{
        backgroundColor: darkMode ? '#222' : '#fff', 
        color: darkMode && '#fff'
      }}>
      <ThemeToggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default App