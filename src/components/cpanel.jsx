import React from 'react'
import './cpanel.css'
import Sidebar from './sidebar'
import Table from './table'

export default function Cpanel() {
  return (
    <div className='c-div'>
      <Sidebar/>
      <Table/>
    </div>
  )
}
