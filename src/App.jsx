import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <>
      <div className="bg-[#FFFF80] h-auto ">

        <Navbar />

        <div className="  w-screen  my-20  flex justify-center items-center">
          <div >
            <h4 className='text-[#FF5580] text-xl roboto-bold'>Hey , I'm</h4>
            <h1 className="text-6xl text-[#FF5580] p-2 roboto-bold">Alwin Sajan !</h1>
            <ul className='inline-block'>
              <li className='w-8 h-8 bg-slate-600 inline-block'><a href="https://www.linkedin.com/in/alwin-sajan-102177255/"><img src="" alt="" /></a></li>
              <li className='w-8 h-8 bg-slate-600 inline-block ml-4'><a href=""><img src="" alt="" /></a></li>
              <li className='w-8 h-8 bg-slate-600 inline-block ml-4'><a href=""><img src="" alt="" /></a></li>
              <li className='w-8 h-8 bg-slate-600 inline-block ml-4'><a href=""><img src="" alt="" /></a></li>
            </ul>
            
          </div>
          <img src="https://avatars.githubusercontent.com/u/116751380?v=4" className='  bounded-full ml-60 w-60 border-solid border-8 border-[#FFBF1C] rounded-full' alt="Alwin Sajan" />
        </div>

        <div className='mt-55 flex justify-center h-screen  items-center'>
          <div className='  w-[80%] bg-[#FF5580] h-[20vw]'></div>
        </div>

      </div>


    </>
  );
};

export default App;