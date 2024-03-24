import { Avatar, LinearProgress } from '@mui/material'
import React from 'react'

export default function Timeline() {
  return (
    <div className=' overflow-y-scroll px-2 py-10 justify-around items-center flex-col gap-9 divide-y-2 divide-gray-300 hidden md:flex flex-1 h-fit'>
       
        <section className='w-full px-3 py-5 bg-gray-300 rounded-xl flex gap-2 flex-col'> 
          
            <main className=' flex w-fit justify-between gap-2'>
              <h2 className=' text-slate-600 font-medium'>Your Pages and Profile</h2>
              <div>...</div>
            </main>
            
            <main className='flex gap-3 items-center'>
                <Avatar src='https://img.freepik.com/free-photo/portrait-black-young-man-wearing-african-traditional-red-colorful-clothes_627829-4909.jpg?w=740&t=st=1711250291~exp=1711250891~hmac=bde55897b746ecf20bd67926a87640dd05cf84c7fe15c75f345f44efd07bbf24' alt=''/>
                <div className=' text-slate-500'>Group name</div>
            </main>

            <main className='flex gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="steelblue" class="bi bi-nintendo-switch" viewBox="0 0 16 16">
                    <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256"/>
                    <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"/>
                    </svg>
                <div className=' text-slate-700 text-sm'>Switch page</div>
            </main>

            <main className='flex gap-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="steelblue" class="bi bi-megaphone" viewBox="0 0 16 16">
                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
                </svg>
                <div className=' text-slate-700 text-sm'>Create promotion</div>
            </main>

        </section>

        <section className='w-full py-2 flex flex-col justify-center items-center gap-3'>

          <main className='flex justify-between gap-12'>
            <h1 className=' font-extrabold text-xl text-slate-400'>Find friends</h1>
            <a className=' text-blue-600'>See all</a>
          </main>

         <main className='flex gap-2 justify-center items-center'>
            
            <div className='flex-1'>
              <img className='w-16 h-16 rounded-3xl' src='https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg?w=740' alt=''/>
            </div>

            <div className='flex-2 flex flex-col'>
              
               <div className='flex justify-between items-center gap-2'>
                  <h2 className=' text-sm text-neutral-600 font-semibold'>Clerk Wilson </h2>
                  <a className=' text-indigo-700 font-semibold'>1w .</a>
               </div>
              
              <div className='flex items-center'>
               <article className=' text-sm font-light'>1 mutual friend</article>
              </div>

              <section className='w-full flex gap-2 mx-3 my-2'>
                <button className=' bg-blue-600 px-2 py-1 rounded-md text-slate-100'>Confirm</button>
                <button className=' font-extrabold'>Delete</button>
              </section>

            </div>

         </main>

        </section>

        <section className='flex flex-col gap-2'> 
            <div className='text-slate-500 font-semibold text-xl'>Group conversions</div>
            
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>Create new group
            </div>

         </section>

    </div>
  )
}
