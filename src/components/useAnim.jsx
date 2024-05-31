import React from 'react'
import {useAnimate} from 'framer-motion'

const useAnim = () => {
  return (
    <div className='grid h-screen place-content-center'>
        <Basic />
    </div>
  );
};

const Basic = () =>{
    return (
    <div>
        <div className='h-24 w-24 bg-violet-500'>
            <button className='mt-4 rounded-md bg-slate-900 px-4 py-2 font-normal'>Trigger animation</button>
        </div>
    </div>)
}

export default useAnim