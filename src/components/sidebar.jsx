import React from 'react'
import './sidebar.css'
import person from '../img/person.svg'

export default function Sidebar() {
  return (
    <div className='side-bar'>
        <ul>
            <li><img className="svg" src={person} alt='person'/></li>
            <li><img className="svg" src={person} alt='person'/></li>
            <li><img className="svg" src={person} alt='person'/></li>
            <li><img className="svg" src={person} alt='person'/></li>
            <li><img className="svg" src={person} alt='person'/></li>
            <li><img className="svg" src={person} alt='person'/></li>
        </ul>
    </div>
  )
}
