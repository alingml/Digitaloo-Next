import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: ['Developer', 'Designer', 'Creator'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-9 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
                {/* <p className='text-lg bold text-cyan-300 font-bold mb-3'>digitaloo</p> */}
                <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Digital Creation Agency</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#00168A" />
                </h1>
                <div className='pt-3'>
                    <Link href="#servicii">
                    <button className='heroButton'>Servicii</button>
                    </Link>
                    <Link href="#proiecte">
                    <button className='heroButton'>Proiecte</button>
                    </Link>
                    <Link href="#puncteCheie">
                    <button className='heroButton'>Puncte cheie</button>
                    </Link>
                    <Link href="#blog">
                    <button className='heroButton'>Blog</button>
                    </Link>
                    <Link href="#contact">
                    <button className='heroButton'>Contact</button>
                    </Link>
                </div>
                </div>
        </div>
    )
}