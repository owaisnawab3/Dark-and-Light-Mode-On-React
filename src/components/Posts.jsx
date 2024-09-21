import React from 'react'
import { useContext } from 'react'
import { themeContext} from '../context/themeContext'
function Posts() {
  const {theme, onClickHandle} = useContext(themeContext);
  return (
    <div>
      <h4>My Post With {theme}</h4>
        <button className={`dark ${theme === "dark" ? "bg-light" : "dark" } border`}
        onClick={onClickHandle}>
        {theme === "Dark" ? "Light" : "Dark"}
        </button>
    </div>
  )
}

export default Posts