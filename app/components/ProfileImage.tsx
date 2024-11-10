'use client'
import React from 'react'

const ProfileImage = ({path, height, width} : 
  { path: string | null, height: number, width:number }) => {
  return (
    <div>
      <img src={path || "/person.png"} alt="Profile Picture" height={height} width={width} className='rounded-full' />
    </div>
  )
}

export default ProfileImage