import React, { useState } from 'react'
import { menu } from "./SideBarConfig"
import { IoReorderThreeOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title)
    if (title === "Profile") {
      navigate("/username");
    }
    else if (title === "Home") {
      navigate("/");
    }
  };
  return (
    <div className='sticky top-0 h-[100vh] bg-gradient-to-b from-customYellow  via-customYellow to-emerald-100 h-screen'>
      <div className='flex flex-col justify-between h-full px-10'>
        <div>
          <div className='pt-10'>
            <img className='w-40 image_style' src="images/logo.png" alt="not found" />
          </div>

          <div className="mt-10">
            {menu.map((item) => (
            <div 
            onClick={() => handleTabClick(item.title)} 
            className='flex items-center mb-9 cursor-pointer text-lg'
            >
              {activeTab===item.title? item.activeIcon:item.icon}
              <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>
            </div>))}

          </div>
        </div>
        <div className='flex items-center cursor-pointer pb-10'>
          <IoReorderThreeOutline className='text-2xl text-emerald-600' />
          <p className="ml-5 ">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;