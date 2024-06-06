import React from 'react'
import Reveal from './Reveal'

const Works = () => {
  return (
    <div className='h-screen w-screen bg-[#ffbf1c] text-[#ffff80]' id='works'>
      <h2 className='text-center text-3xl pt-16 roboto-black'>Works</h2>
      <ul className='flex justify-center items-center w-auto  pt-20 gap-8 overflow-auto'>

        <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://collage-website-nist.vercel.app/">
              <img src="https://cdn.worldvectorlogo.com/logos/nist.svg" className=' w-60 h-60 rounded ' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>NIST</h4>
            </a>
            <p className='text-sm roboto-bold text-[#544c3b]  text-center'>College Website</p>
          </li>
        </Reveal>

        <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://alwin-sajan.github.io/Quiz-App/">
              <img src="https://thumbs.dreamstime.com/b/quiz-icon-long-shadow-vector-98635928.jpg" className=' w-60 h-60 rounded ' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>Quiz App</h4>
            </a>
            <p className='text-sm roboto-bold text-[#544c3b]  text-center'>GK testing website</p>
          </li>
        </Reveal>

        <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://neetocode.com/site/alwin-sajan/HCJ-BPX">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dCPFZ3snUnVpDvxtN0qS2bn13ZCppoC11FFvqcuPZtuUycVi_rpTZKaE5Vf2Dy9xmjo&usqp=CAU" className='bg-black w-60 h-60 rounded' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>Netflix Clone</h4>
            </a>
            <p className='text-sm roboto-bold text-[#544c3b]  text-center'>Clone Website for Netflix</p>
          </li>
        </Reveal>

         <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://uifry-coral.vercel.app/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlxRVEnkTxLHnWzXjp0Y9g5zGZS8cTtGojw&s" className='bg-black w-60 h-60 rounded' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>Uifry</h4>
            </a>
            <p className='text-sm roboto-bold text-black text-center'>Clone Website for Netflix</p>
          </li>
        </Reveal>

       {/* <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://neetocode.com/site/alwin-sajan/HCJ-BPX">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dCPFZ3snUnVpDvxtN0qS2bn13ZCppoC11FFvqcuPZtuUycVi_rpTZKaE5Vf2Dy9xmjo&usqp=CAU" className='bg-black w-60 h-60 rounded' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>Netflix Clone</h4>
            </a>
            <p className='text-sm roboto-bold text-black text-center'>Clone Website for Netflix</p>
          </li>
        </Reveal>

        <Reveal>
          <li className='w-60  h-min-[80%]'>
            <a href="https://neetocode.com/site/alwin-sajan/HCJ-BPX">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dCPFZ3snUnVpDvxtN0qS2bn13ZCppoC11FFvqcuPZtuUycVi_rpTZKaE5Vf2Dy9xmjo&usqp=CAU" className='bg-black w-60 h-60 rounded' alt="" />
              <h4 className='mt-4 text-2xl roboto-medium text-center'>Netflix Clone</h4>
            </a>
            <p className='text-sm roboto-bold text-black text-center'>Clone Website for Netflix</p>
          </li>
        </Reveal> */}


      </ul>
    </div>
  )
}

export default Works