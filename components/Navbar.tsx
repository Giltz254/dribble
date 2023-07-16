import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session = {};
  return (
    <nav className='flexBetween navbar sticky top-0 z-20 bg-white'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={'/'}>
                <Image priority src={'/logo.png'} width={115} height={40} alt='KipDEV' className='w-auto h-auto object-cover' />
            </Link>
            <ul className='xl:flex hidden text-sm font-medium gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {session ? (
            <>
            UserPhoto
            <Link href={'/create-project'}>Share Your Work</Link>
            </> ) : (
                <AuthProviders />
            )
            }
        </div>
    </nav>
  )
}

export default Navbar