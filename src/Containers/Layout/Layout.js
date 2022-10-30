import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Layout = (props) => {
  return (
    <div className='flex w-full '>
        <Sidebar/>
        {props.children}
    </div>
  )
}

export default Layout
