import React from 'react'

import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0'>
      <motion.img 
      initial={{
        y:-100,
        opacity: 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="https://grecu-capital.com/wp-content/uploads/2022/11/gc.png"
      alt=""
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>digitaloo</h4>
        <p className='font-bold text-2xl mt-1'>GRECU CAPITAL</p>
        <div className='flex space-x-2 my-2'>
          <img 
            className='h-10 w-10 rounded-full'
            src='https://icon2.cleanpng.com/20171221/pww/wordpress-logo-free-download-png-5a3c3505dabc58.298448491513895173896.jpg'
            alt=''
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started... - Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}