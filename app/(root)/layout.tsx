import React from 'react'
import Navbar from '@/app/components/Navbar'
import Provider from '../Provider'

const layout = ( { children } : Readonly< { children: React.ReactNode } > ) => {
  return (
    <main className='font-work-sans'>
        <Provider>
          <Navbar />
          { children }
        </Provider>
    </main>
  )
}

export default layout