import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside or on the toggle button
  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.closest('.toggle-button')
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle link click within the sidebar
  const handleLinkClick = () => {
    setLinkClicked(true); // Set linkClicked to true
    setIsOpen(true); // Keep sidebar open when link is clicked
  };

  // Reset linkClicked state after a short delay
  useEffect(() => {
    if (linkClicked) {
      const timeout = setTimeout(() => {
        setLinkClicked(false);
      }, 300); // Adjust delay as needed
      return () => clearTimeout(timeout);
    }
  }, [linkClicked]);

  return (
    <>

      {/* Topbar */}
      <nav className='fixed top-0  bg-white shadow-lg dark:bg-slate-800 px-6 md:px-80 py-6 w-screen'>
        <div className='flex justify-between font-mono'>
          <div>
            <h1 className='text-3xl text-gray-900 dark:text-white'>RARC</h1>
          </div>
        {/* Navigation Links */}
          <div className='hidden md:block'>
            <ul className={"flex space-x-4 text-gray-800 pt-1  dark:text-gray-400 text-2xl"}>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-900" >Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-800 hover:text-gray-900" >Blog</Link>
              </li>
              <li>
                <Link to="/gear" className="text-gray-800 hover:text-gray-900 ml-" >Gear</Link>
              </li>
            </ul>
          </div>
          
        </div>

      </nav>

      {/* Sidebar */}
      <nav ref={sidebarRef} className={`top-0 bg-white shadow-lg dark:bg-slate-800 fixed h-screen w-1/2 transition-all ease-in-out duration-500 block md:hidden ${isOpen ? 'ml-0' : '-ml-96'}`}>
        <div className="mt-14 ml-6 text-gray-900 font-bold text-xs">
          <h1>Explore:</h1>
        </div>
        
        {/* Navigation Links */}
        <ul className={`flex-col space-y-4 ml-12 text-gray-800 mt-4 dark:text-gray-400 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="text-gray-800 hover:text-gray-900" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-800 hover:text-gray-900" onClick={handleLinkClick}>Blog</Link>
          </li>
          <li>
            <Link to="/gear" className="text-gray-800 hover:text-gray-900 ml-" onClick={handleLinkClick}>Gear</Link>
          </li>
        </ul>
        
        {/* Divider */}
        <div className={`border-b border-b-gray-300 py-4 ${isOpen ? 'block' : 'hidden'}`}></div>
        
        {/* Social Media Links */}
        <ul className={`flex flex-col space-y-4 ml-12 text-gray-800 mt-4 dark:text-gray-400 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" onClick={handleLinkClick}>Facebook</a>
          <a href="#" onClick={handleLinkClick}>Instagram</a>
          <a href="#" onClick={handleLinkClick}>LinkedIn</a>
          <a href="#" onClick={handleLinkClick}>Github</a>
        </ul>
        
        {/* Divider */}
        <div className={`border-b border-b-gray-300 py-4 ${isOpen ? 'block' : 'hidden'}`}></div>
      </nav>
      
      {/* Toggle Button */}
      <button
        className="fixed block md:hidden bottom-20 right-6 text-5xl bg-white rounded-full shadow-lg p-2 text-gray-800 dark:bg-slate-800 focus:outline-none z-10 toggle-button"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoCloseSharp /> : <RiMenu5Fill />}
      </button>
      
      {/* Main Content Area */}
      <div className={`ml-64 ${isOpen ? 'ml-0' : 'ml-64'}`}>
        <Outlet />
      </div>

    </>
  );
};

export default Topbar;
