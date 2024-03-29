import React from './TopBar.css'

export default function TopBar() {
  return (
    <div className='Top'>
      <div className="topLeft">
        <i className="TopIcons fa-brands fa-linkedin"></i>
        <i className="TopIcons fa-brands fa-github"></i>
        <i className="TopIcons fa-brands fa-twitter"></i>
        <i className="TopIcons fa-solid fa-envelope"></i>
        </div>
      <div className="topCenter">
        <ul className="toplist">
            <li className="toplistItems"> HOME </li>
            <li className="toplistItems"> ABOUT </li>
            <li className="toplistItems"> CONTACT</li>
            <li className="toplistItems"> EDUCATION</li>
            <li className="toplistItems"> PROFESIONEL EXPERIENCE </li>
            <li className="toplistItems"> LOGOUT</li>
        </ul>
      </div>

      <div className="topRight">

        <img 
        className ="TopImg" src="./images/mypic.jpg" alt=""/>
        <i className=" SearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
