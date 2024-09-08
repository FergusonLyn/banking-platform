import React from 'react'
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-[#fffefe]">
        <div className="mb-16 text-center">
          <span className="text-md font-semibold">Sign Up</span> <hr  className="bg-violet-800 h-1"/>          
        </div>
        <div>
            <form action="">
                <div className='m-4'>
                    <label htmlFor="" className='m-2'>Name</label> <br />
                    <input type="text" name="" id="" className='border-2 border-gray-400 rounded-md m-2 w-[300px] h-10'/>
                </div>
                <div className='m-4'>
                    <label htmlFor="" className='m-2'>Email</label> <br />
                    <input type="email" name="" id="" className='border-2 border-gray-400 rounded-md m-2 w-[300px] h-10'/>
                </div>
                <div className='m-4'>
                    <label htmlFor="" className='m-2'>Password</label> <br />
                    <input type="password" name="" id="" className='border-2 border-gray-400 rounded-md m-2 w-[300px] h-10'/>
                </div>
                <button
                    type="submit"
                    className="bg-[#e2e2e2] w-[300px] py-3 rounded-[10px] m-5 font-bold text-[13px]"
                > Register </button>
               
                
            </form>
        </div>
      
  
    </div>
  )
}

export default page
