import React, { useState } from 'react';
import {
  FaUser,
  FaBars,
  FaCalenderDays,
  FaHouseLock,
  FaTv,
  FaGears,

}from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import { useState } from 'react/cjs/react.production.min';


const Sidebar = ({Children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
 const menuItem=[
  {
    path:"/home",
    name:"Home",
    icon:<FaUser/>
  },
  {
    path:"/calendar",
    name:"Calendar",
    icon:<FaCalenderDays/>
  },
  {
    path:"/homesettings",
    name:"Homesettings",
    icon:<FaHouseLock/>
  },
  {
    path:"/entertainment",
    name:"Entertainment",
    icon:<FaTv/>
  },
  {
    path:"/settings",
    name:"Settings",
    icon:<FaGears/>
  },

 ]

return(
    <div className="container">
      <div style={{width:isOpen ? "250px" : "50px" }}className="sidebar">
        <div className="top_section">
           <h1 style={{display:isOpen ? "block" : "none" }} className="logo">{Logo}</h1>
             <div style={{marginLeft:isOpen ? "50px" : "0" }} className="bars">
                <FaBars onclick={toggle}/>
             </div>
        </div>
    
      {
        menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display:isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
        </NavLink>

  ))

      }
      </div>
       <main>{Children}</main>
    </div>
  );
};

export default Sidebar;
