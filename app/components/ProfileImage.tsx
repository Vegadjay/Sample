import React from 'react'

const ProfileImage = ({path, height, width} : { path: string, height: number, width:number }) => {
  return (
    <div>
      <img src={path} alt="" height={height} width={width} className='rounded-full' />
    </div>
  )
}

export default ProfileImage