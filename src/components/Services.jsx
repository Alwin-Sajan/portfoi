import React from 'react'

const Services = ({darkMode}) => {
  return (
    <div className={`${darkMode?'bg-gray-800 text-[#ffff80]':'bg-[#ffff80] text-[#544c3b]'} lg:w-full lg:h-[50vh] rounded  p-8 my-16  lg:flex items-center`}>
          <h3 className='protest-guerrilla-regular ml-28 text-3xl  '>Services</h3>
          <ul className='lg:flex max-md:grid justify-center items-center w-[100%] max-md:mt-20  gap-8 overflow-hidden'>
            <li className='w-60 h-auto '>
              <img className='rounded-lg' src="https://media.istockphoto.com/id/1402285381/vector/d-logo-design-and-template-creative-d-icon-initials-based-letters-in-vector.jpg?s=612x612&w=0&k=20&c=tIjfOJgtpV_92-Zw0lUFgguWYameGe4DJdAslBSJdPw=" alt="" />
              <p className='p-2 roboto-bold text-center'>Design</p>
            </li>
            <li className='w-60 h-auto'>
              <img className='rounded-lg' src="https://cdn-icons-png.flaticon.com/512/12953/12953846.png" alt="" />
              <p className='p-2 roboto-bold text-center'>Website Creation</p>
            </li>
            <li className='w-60 h-auto'>
              <img className='rounded-lg' src="https://cdn-icons-png.flaticon.com/512/243/243940.png" alt="" />
              <p className='p-2 roboto-bold text-center'>Tech Support</p>
            </li>
          </ul>
        </div>
  )
}

export default Services