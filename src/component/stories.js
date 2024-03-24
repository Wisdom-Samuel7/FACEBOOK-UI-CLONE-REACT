import { Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import Post from './post'

export default function Stories() {
  
    const [open,setOpen] = useState(false)
    const [post,setPost] = useState(false)


  return (
    
 <section className='flex flex-col flex-1'>


   <Dialog open={open} fullWidth>

      <DialogTitle>
       
        <div className=' font-extrabold text-center'>Create Post</div>
            
          <div  onClick={()=>{setOpen(!open)}} className=' absolute top-4 right-6'>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-x-lg" viewBox="0 0 16 16">
             <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
             </svg>
          </div>
      </DialogTitle>

      <DialogContent>

         <DialogContentText>
           
            <div className='flex gap-2 items-center'>
                <div><img className='w-8 h-8 rounded-full' src='https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg?w=740' alt=''/></div>
                
                <div>

                    <div className=' font-medium text-black'>Wisdom Samuel</div>
                    
                    <div className='flex gap-2 items-center'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                        </svg> 
                        
                        <p className=' text-slate-950 font-bold'>Public</p>
                      
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>

                    </div>
                    
                </div>

            </div>

         </DialogContentText>
      </DialogContent>

         <textarea className='h-40 px-2 py-3 placeholder:text-2xl placeholder:text-slate-700 placeholder:font-light' placeholder="What's on your mind, Wisdom?"/>
        
        <div className='w-full h-8 gap-4 border-zinc-300 border-2 flex justify-center items-center py-5'>
          
          <p className=' font-semibold'>Add to your post</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="lime" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
            <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z"/>
            </svg>
 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className=' fill-blue-600' class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="yellow" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orangered" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="lime" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>  

            <div className=' cursor-pointer' onClick={()=>{setPost(!post)}}>...</div>

        </div>

      <DialogActions>
          
      </DialogActions>
   </Dialog>


{/* POST SECTION */}

  <Dialog open={post}>
   <DialogTitle>
      
       <h1 className=' font-semibold text-center'>Add to your post</h1>
      
       <div className=' grid grid-cols-2 gap-12'>

         <div className='flex px-9 flex-col gap-4 justify-center items-center'>
           
            <aside className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="lime" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z"/>
                </svg> <p>Photo/video</p>
            </aside>

            <aside className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="yellow" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235"/>
                </svg> <p>Feeling/activity</p>
            </aside>

            <aside className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="lime" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>  
                <p>Get whatsapp  </p>
            </aside>

            <aside className='flex gap-3'>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-filetype-gif" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.278 13.124a1.4 1.4 0 0 0-.14-.492 1.3 1.3 0 0 0-.314-.407 1.5 1.5 0 0 0-.48-.275 1.9 1.9 0 0 0-.636-.1q-.542 0-.926.229a1.5 1.5 0 0 0-.583.632 2.1 2.1 0 0 0-.199.95v.506q0 .408.105.745.105.336.32.58.213.243.533.377.323.132.753.132.402 0 .697-.111a1.29 1.29 0 0 0 .788-.77q.097-.261.097-.551v-.797H1.717v.589h.823v.255q0 .199-.09.363a.67.67 0 0 1-.273.264 1 1 0 0 1-.457.096.87.87 0 0 1-.519-.146.9.9 0 0 1-.305-.413 1.8 1.8 0 0 1-.096-.615v-.499q0-.547.234-.85.237-.3.665-.301a1 1 0 0 1 .3.044q.136.044.236.126a.7.7 0 0 1 .17.19.8.8 0 0 1 .097.25zm1.353 2.801v-3.999H3.84v4h.79Zm1.493-1.59v1.59h-.791v-3.999H7.88v.653H6.124v1.117h1.605v.638z"/>
                </svg>
                  GIF
            </aside>

         </div>

    {/* SECOND GRID */}
         <div className='flex px-9 flex-col gap-4 justify-center items-center'>
         
          <div  onClick={()=>{setPost(!post)}} className=' absolute top-2 left-6'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-x-lg" viewBox="0 0 16 16">
               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
          </div>

         <aside className='flex gap-3'>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='blue' class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>

            <p className=' text-justify'> Tag people </p>
               
            </aside>

            <aside className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orangered" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <p>Check in</p>
            </aside>

            <aside className='flex gap-3'>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
               <p> Get calls </p>
            </aside>

            <aside className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="crimson" class="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                </svg>
               <p> Life video </p>
            </aside>

         </div>

       </div>
   </DialogTitle>
  </Dialog>

  <div className='w-full h-fit flex flex-col py-2 shadow-sm shadow-slate-400'>
    
        <div className=' w-full h-72 bg-none flex px-2 gap-3 py-4 flex-1'>

            <div className='flex-1'>
                <img className=' hover:scale-105 duration-300 rounded-2xl w-full object-center object-cover h-full' src='https://img.freepik.com/free-photo/ukraine-russian-conflict-courageous-handsome-guy-white-shirt-with-flag_140725-167146.jpg?t=st=1711129909~exp=1711133509~hmac=2a3215d92ae7508c662e0faf64849d15fea0db1b9aa7a39851eef94e8ab1dbff&w=740' alt=''/>
            </div>
          
            <div className='flex-1'>
                <img className='hover:scale-105 duration-300 rounded-2xl w-full object-center object-cover h-full' src='https://img.freepik.com/free-photo/young-smiling-guy-glasses_144627-34443.jpg?w=740' alt=''/>
            </div>
          
            <div className='flex-1'>
                <img className='hover:scale-105 duration-300 rounded-2xl w-full object-center object-cover h-full' src='https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?t=st=1711129950~exp=1711133550~hmac=6faaa057e042aea75c6e4b24ed490f8ceea99b4a98975c29e7b45ee53a39593f&w=360' alt=''/>
            </div>
            
        </div>

        <div className=' w-full h-28 bg-none flex flex-col'>
        
        <div className=' flex gap-2 justify-center'> 
            <Avatar src='https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg?w=740' alt=''/>
            <input onClick={()=>{setOpen(!open)}} type='text' className='w-60 rounded-lg font-medium placeholder:text-slate-500' placeholder="What's on your mind , Wisdom?"/>
        </div>

        <div className=' flex justify-evenly gap-3 items-center h-fit py-6'>
        
            <div className='flex items-center text-slate-600 gap-2 font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="hotpink" class="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
            </svg> Live Video
            </div>

            <div className='flex items-center text-slate-600 gap-2 font-medium'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lime" class="bi bi-file-image" viewBox="0 0 16 16">
                <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z"/>
            </svg> Photo/Media
            </div>

            <div  className='flex items-center text-slate-600 gap-2 font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="hotpink" class="bi bi-play-btn" viewBox="0 0 16 16">
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg> Reel
            </div>

        </div>

        </div>

  </div>


  <Post/>
 </section>


  )
}
