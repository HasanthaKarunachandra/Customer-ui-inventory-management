import React from 'react'
import './toparea.css'
import Menu from '../img/Menu.svg'
import notifications from '../img/notifications.svg'
import search from '../img/search.svg'
import account_circle from '../img/account_circle.svg'

export default function Toparea() {
  return (
    <div className='main-div'>
        <div className="top-bar">
            <ul>
                <li><img className="menu-svg svg" src={Menu} alt='Menu'/></li>
            </ul>
            <ul>
                <li><img className="svg" src={search} alt='Menu'/></li>
                <li><img className="svg" src={notifications} alt='Menu'/></li>
                <li><img className="svg" src={account_circle} alt='Menu'/></li>
                <li>Hasantha Karunachandra</li>
                <li>&#9660;</li>
            </ul> 
        </div>
    </div>
  )
}

