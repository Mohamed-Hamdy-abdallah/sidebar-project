import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './Context';


const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
      <img  src={logo} className='logo' alt='codin addict' />
      <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
          {links.map((link)=>(
              <li key={link.id}><a href={link.url}>{link.icon}{link.text}</a></li>
          ))}
      </ul>
      <ul className='social-icons' >
      {social.map((link)=>(
              <li key={link.id}><a href={link.url}>{link.icon}</a></li>
          ))}
      </ul>
  </aside>
}

export default Sidebar