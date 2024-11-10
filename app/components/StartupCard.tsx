import React from 'react'
import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <>
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formateDate(post._createdAt)}
                </p>
              <div className='flex gap-1.5'>
                  <EyeIcon className='size-6 text-primary' />
                  <span className='text-16-medium'>{post.views}</span>
              </div>
            </div>

            <div className='flex-between'>
                <div className='flex-1'>
                  <Link href={`/user/${post.authorId}`}>
                     <p className='text-16-medium line-clamp-1'>{post.name}</p>
                   </Link>
                   <Link href={`/user/${post._id}`}>
                     <h3 className='text-16-medium line-clamp-1'>{post.title}</h3>
                   </Link>
                </div>
                   <Link href={`/startup/${post.authorId}`}>
                       <Image 
                        src={post.profilePicture}
                        height={48}
                        width={48}
                        alt='Profile Picture'
                        className="rounded-full object-cover"
                        unoptimized={true}
                      />
                   </Link>
            </div>

            <Link href={`/startup/${post._id}`}>
              <p className='startup-card-desc'>
                <img src={`${post.img}`} 
                className='hover:scale-105 hover:transition-all hover:ease-in-out '
                alt="This is picture from the Browser" />
              </p>
            </Link>

            <div className='flex-between gap-3 mt-5'>
              <Link href={`/?query=${post.category.toLowerCase()}`}>
                <p className='text-16-medium'>{post.category}</p>
              </Link>

              <Button className='startup-card btn' asChild>
                <Link href={`/startup/${post._id}`}>
                  Details
                </Link>
              </Button>
            </div>
        </li>
    </>
  )
}

export default StartupCard