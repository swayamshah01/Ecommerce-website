import React from 'react'

const NewsLetter = () => {

    const onSubmit = () =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>subcribe now and get 20% off</p>
      <p className='text-gray-400 mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate.</p>
      <form onSubmit={onSubmit} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='enter your email' className='w-full flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
