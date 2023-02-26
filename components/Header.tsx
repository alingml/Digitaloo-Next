import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            <SocialIcon
                url="https://www.youtube.com"
                fgColor='gray'
                bgColor='transparent'
                />
        </div>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </div>
    </header>
  )
}