import React, { useState, useEffect } from 'react'
import './App.css'
import Posts from './components/Posts'
import { themeContext, themes } from './context/themeContext' 

function App() {

  const [theme, setTheme] = useState(themes.Light)
 
  function onClickHandle(){
    theme === themes.Light ? setTheme("Dark") : setTheme(themes.Light)
  }

  useEffect(() => {
    const body = document.body
    switch(theme){
      case themes.Light:
      body.classList.add('bg-light')
      body.classList.add('text-dark')
      body.classList.remove('bg-dark')
      body.classList.remove('text-light')
      break;
      case themes.dark:
      body.classList.add('bg-dark')
      body.classList.add('text-light')
      body.classList.remove('bg-light')
      body.classList.remove('text-dark')
      break;
      default:
      body.classList.add('bg-light')
      body.classList.add('text-dark')
      body.classList.remove('bg-dark')
      body.classList.remove('text-light')
    }
  },[theme])

  return (
    <>
    <themeContext.Provider value={{theme, onClickHandle}}>
    <div className='main-container'>
     <h1>Light & Dark Theme</h1>
     <Posts theme={theme}/>
    </div>
    </themeContext.Provider>
    </>
  )
}

export default App
