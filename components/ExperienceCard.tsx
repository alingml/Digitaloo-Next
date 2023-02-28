import React from 'react'

import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img 
      initial={{
        y:-100,
        opacity: 0,
      }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="https://grecu-capital.com/wp-content/uploads/2022/10/cropped-grecu-capital-logo-white-.png"
      alt=""
      />
      <div>
        <h4>digitaloo</h4>
        <p>GRECU CAPITAL</p>
        <div></div>
        <p></p>
        <ul >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  )
}