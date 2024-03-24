import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='w-screen h-screen justify-center items-center bg-slate-50 flex flex-col md:flex-row'>
    
     <div className=' md:flex-1 md:items-start gap-3 flex px-12 py-12 flex-col justify-center items-center'>
        <div style={{fontFamily:"verdana"}} className=' font-extrabold text-blue-600 text-5xl'>Facebook</div>
        <span className=' text-2xl font-medium '>Facebook helps you connect and share with people on your life.</span>
     </div>

     <div className=' flex-1 flex justify-center flex-col gap-4'>
        <form className=' w-96 h-fit py-7 rounded-lg px-2 shadow-lg shadow-slate-400 flex flex-col gap-7 font-semibold'>
            <input className=' px-3 py-4' type='email' placeholder='Email address or phone number'/>
            <input className=' px-3 py-4' type='password' placeholder='Password'/> 
            <input className=' bg-blue-600 px-0 py-3 rounded-lg text-slate-50 font-bold text-xl' type='submit' value="Log in"/>
            <Link className=' text-blue-600 text-center text-sm'>Forgotten password?</Link>

            <button className=' font-extrabold text-slate-50 bg-lime-600 w-50 px-3 py-3 rounded-xl m-auto text-lg'>Create new account</button>
        </form>
        <div><Link className=' font-extrabold text-sm'>Create a page </Link> for celebrity,brand or business</div>
     </div>

    </div>
  )
}
