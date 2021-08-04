import React from 'react'
import './Menu.scss'
function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#portfolio'>Project</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#work'>Certificate && Achievment</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#about-me'>To Do</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>

        </div>
    )
}

export default Menu
