import React from 'react'

function Modal({addClose}) {
  return (
    <div className='flex flex-col justify-center items-center text-center backdrop-blur-md  absolute top-0 left-0 right-0 h-screen'>
        <div className="Modal-Container w-1/4	 text-center bg-gray-300 p-16 my-0 mx-4 rounded-xl	 relative">
        <i class="ri-close-circle-fill absolute top-5 right-5 text-3xl text-red-600 cursor-pointer transition duration-500	 hover:text-black" onClick={(addClose)}></i>
            <div className="w-14 h-14 flex justify-center items-center my-0 mx-auto rounded-full bg-green-400">
            <i class="ri-shield-check-fill text-2xl text-white"></i>
            </div>
            <h2 className='mt-5 text-black text-4xl'>Payment Successful</h2>
            <p className='mt-5 text-black text-2xl'>Your order in on way</p>
        </div>
    </div>
  )
}

export default Modal