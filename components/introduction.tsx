"use client"

import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 flex flex-col items-center justify-center h-full p-6 py-20 md:py-0 md:flex-row md:gap-10'>
                <div className='flex justify-center'>
                    <Image src="/home-4.png" priority width="500" height="500" alt="Avatar" />
                </div>
                <div className='flex flex-col justify-center max-w-md'>
                    <h1 className='mb-5 mt-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8'>
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='block font-bold text-secondary'
                        />
                    </h1>
                    <p className='mx-auto mb-4 text-xl text-center md:text-justify md:mx-0 md:mb-8'>
                        Como desarrollador frontend, me encanta crear experiencias digitales que sean atractivas y accesibles para todos.
                    </p>
                    <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
                        <Link href='/portfolio' className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                            Ver proyectos
                        </Link>
                        <Link href='/#' className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
