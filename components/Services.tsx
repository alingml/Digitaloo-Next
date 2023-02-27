import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Services({ }: Props) {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity: 1.1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Services
            </h3>
            <motion.img
                initial={{
                    x: -200
                }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                src="https://digitaloo.ro/wp-content/uploads/2022/06/19362653-removebg-preview.png"
                className='mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[350px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4-xl font-semibold'>Web <span className='underline decoration-[cyan]/50'>Development</span></h4>
                <p className='text-base'>Ieșirea în evidență cu un site web este importantă din mai multe motive, printre care:

                    Atragerea mai multor vizitatori:

                    un site care iese în evidență este mai probabil să fie remarcat de utilizatori, ceea ce poate duce la creșterea traficului și la mai mulți clienți potențiali.

                    Diferențierea de concurenți:

                    Cu atât de multe site-uri web, poate fi greu să te diferențiezi de concurenți. Un site web unic și bine conceput vă poate ajuta să vă evidențiați și să vă stabiliți o identitate de brand puternică și distinctă.

                    Îmbunătățirea experienței utilizatorului:

                    oferind o experiență de utilizator unică și captivantă, puteți crește probabilitatea ca utilizatorii să petreacă mai mult timp pe site-ul dvs., să revină în viitor și să întreprindă acțiunile dorite.
           </p>
            </div>

        </motion.div>
    )
}