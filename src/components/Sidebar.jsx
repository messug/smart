import React, { useState } from 'react';
import {
  FaUser,
  FaBars,
  FaAddressBook,
  FaCalendarAlt,
  FaHouseUser, 
  FaTv,
  FaCog,

}from "react-icons/fa";
import {NavLink} from 'react-router-dom';



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
    path:"/Contacts",
    name:"Contacts",
    icon:< FaAddressBook/>
  },

  {
    path:"/calendar",
    name:"Calendar",
    icon:< FaCalendarAlt/>
  },
  {
    path:"/homesettings",
    name:"Homesettings",
    icon:<FaHouseUser/>
  },
  {
    path:"/entertainment",
    name:"Entertainment",
    icon:<FaTv/>
  },
  {
    path:"/settings",
    name:"Settings",
    icon:<FaCog/>
  },

 ]

return(
    <div className="container">
      <div style={{width:isOpen ? "250px" : "50px" }}className="sidebar">
        <div className="top_section">
           <h1 style={{display:isOpen ? "block" : "none" }} className="logo">{}</h1> 
             <div style={{marginLeft:isOpen ? "50px" : "0" }} className="bars">
                <FaBars onClick={toggle}/>
             </div>
        </div>
    
      {
        menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index} className="link" activeClassName="active">
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
