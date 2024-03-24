import { Avatar } from '@mui/material'
import React from 'react'

export default function Post() {
  return (
    <div>
    <div className=' w-full h-fit py-4'>
      {/* Name content */}
        <div className='flex justify-between px-6 py-2'>
           <div className=' flex gap-2 justify-center items-center'> 
            <Avatar src='data:image/jpeg;base64,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' alt=''/>

             <div className=''>
                 <h2 className=' font-semibold'>Sam Tayo</h2>
                 <span className=' font-extralight text-slate-500'>3h . Lagos . </span>
             </div>
           </div>

           <div className=' flex items-center gap-3'>
              <span className=' font-bold text-2xl text-slate-500'>...</span>
              <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
             </span>
           </div>

        </div>

        {/* TEXT REGION */}

        <div className=' px-4'>

          <article>
                Thank you lord Jesus 🙏 for helping me through all the good and bad times father I'm grateful 🙏
                 Glory be to your name alone.
          </article>

          <main>
             <img src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=740&t=st=1711247672~exp=1711248272~hmac=01ba1455d7bb4056f322cd7c76c547c0e4b7ceb332ef48b76f10be62721585a4' alt=''/>
          </main>

          <section className=' flex justify-between '>
              
               <div className=' flex gap-2 py-5'> 

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                 </svg>

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="yellow" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>

               </div>


               <div className=' flex gap-2 py-5 px-2'> 

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                  </svg>

               </div>


          </section>
        </div>

    </div>


    
    <div className=' w-full h-fit py-4'>
      {/* Name content */}
        <div className='flex justify-between px-6 py-2'>
           <div className=' flex gap-2 justify-center items-center'> 
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_euxgVYaZmgSLobbjVWsFjkSJstk0b3dUg&s' alt=''/>

             <div className=''>
                 <h2 className=' font-semibold'>Johnson Caleb</h2>
                 <span className=' font-extralight text-slate-500'>2h . Abuja . </span>
             </div>
           </div>

           <div className=' flex items-center gap-3'>
              <span className=' font-bold text-2xl text-slate-500'>...</span>
              <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
             </span>
           </div>

        </div>

        {/* TEXT REGION */}

        <div className=' px-4'>
          Community, job opportunities, mentorship, tools, and all the tea you need to build a tech career in one FREE newsletter!!
          Yes, you read that correctly! We created the Entering Tech newsletter for everyone looking for a community and resources to start or grow their career in Tech.
          Click the Sign Up button to get access now, and join an exclusive community of Tech enthusiasts like you!
        <article>
  
          </article>

          <main>
             <img className=' w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrOn4vaWZKiA784I0qIX7z9BmdEghubl9oQ&s' alt=''/>
          </main>

          <section className=' flex justify-between '>
              
               <div className=' flex gap-2 py-5'> 

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                 </svg>

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="yellow" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>

               </div>


               <div className=' flex gap-2 py-5 px-2'> 

                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                  </svg>

               </div>


          </section>
        </div>

    </div>

    </div>
  )
}
