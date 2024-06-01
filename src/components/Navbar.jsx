import React from 'react'
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const dcl = ['#092635',
  '#1B4242',
  '#5C8374',
  '#9EC8B9'];

  const Lcl = ['#FFFF80',
    '#FFAA80',
    '#FF5580',
    '#FF0080',
  'white']

  const [darkMode, setDarkMode] = React.useState(false);
  const colorD = ()=> {
    if(!darkMode){
      // alert(darkMode);
      const wDf= document.getElementsByClassName('Main');
      wDf[0].style.background = dcl[1];
    }
    else{
      const wDf= document.getElementsByClassName('Main');
      wDf[0].style.background = Lcl[4];
    }
    setDarkMode(!darkMode);
  };
  return (
    <div className=' w-screen mx-auto py-6 bg-[]  text-[#FFBF1C] h-[12%]'>
      <ul className='w-full flex justify-center items-center'>
        <li className='inline roboto-regular text-base'><a href="">Home</a></li>
        <li className='ml-[40%] inline-block roboto-regular text-base'><a href="#About">About</a></li>
        <li className='ml-5 roboto-regular inline-block text-base'><a href="#works">Works</a></li>
        <li className='ml-5 roboto-regular inline-block text-base'><a href="#contact">Contact</a></li>
        <li className='ml-5  inline-block text-2xl'><button onClick={colorD}><MdDarkMode /></button></li>

      </ul>
    </div>
  )
}

export default Navbar