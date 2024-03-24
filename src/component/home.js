import React from 'react'
import Nav from './nav'
import Stories from './stories'
import Menu from './menu'
import Timeline from './timeline'

export default function Home() {
  return (
    <div>

      <nav>
        <Nav/>
      </nav>
         
         <main className='flex '>
          <Menu/>
          <Stories/>
          <Timeline/>
         </main>

    </div>
  )
}
