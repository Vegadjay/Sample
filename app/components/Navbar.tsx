'use client'
import React from 'react'
import Link from 'next/link'
import { signIn,useSession,signOut } from 'next-auth/react'
import Button from '@/app/components/Button'
import ProfileImage from '@/app/components/ProfileImage'

const Navbar = () => {  
    const { data : session } = useSession();
  
    return (
    <>
    <nav>
        <div className='flex justify-between p-4 w-full rounded-tr-lg rounded-tl-lg'>
        <section>
            <img src="/logo.png" alt="App Logo" />
        </section>
        
        
        <section>
            <div className='flex w-96 justify-between items-center'>
                <Link href='/'>
                    <span className='font-semibold text-xl'>Create</span>
                </Link>

                <Link href={'/'}>
                    <span className='font-semibold text-xl text-red-500'>
                        { session?.user  && <Button onclick={signOut}>Sign Out</Button>}
                        { !session?.user  && <Button onclick={signIn}>Sign In</Button>}
                    </span>
                </Link>

                <Link href={'/'}>
                    <div className='flex w-40 items-center flex-col-reverse'>
                        <span>{session?.user?.name}</span>
                    <div className='h-14 w-14 bg-blue-300 rounded-full'>
                        <ProfileImage path={session?.user?.image ?? null} height={144} width={144} />
                    </div>
                    </div>
                </Link>
            </div>
        </section>
    </div>
    </nav>
    </>
  )
}

export default Navbar