'use client'

import Image01 from '@/assets/photo01.avif'
import Image02 from '@/assets/photo02.avif'
import Image03 from '@/assets/photo03.avif'
import Image04 from '@/assets/photo04.avif'
import Image05 from '@/assets/photo05.avif'
import Image06 from '@/assets/photo06.avif'
import { ThumbImage } from '@/components/thumbImage'
import Arrow from '@/assets/arrow.svg'
import Close from '@/assets/close.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const listImages = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06
  ]

  function handleClickOpenImage (index: number) {
    console.log(index)
    setIsOpen(true)
  }

  function handleCloseLightBox () {
    setIsOpen(false)
  }

  return (
    <>
      <section className='w-full min-h-screen flex items-start justify-center py-10 px-3 bg-slate-100'>
        <div className='grid grid-cols-3 gap-3'>
          {
            listImages.map((img, index) =>(
              <ThumbImage
                key={index}
                srcImage={img}
                onClick={() => handleClickOpenImage(index)}
              />
            ))
          }
        </div>
      </section>
      {
        isOpen && (
          <div className='fixed inset-0 w-full h-full z-30 flex items-center justify-center bg-black bg-opacity-50 gap-4'>
            <button onClick={handleCloseLightBox} className='absolute top-5 right-5 w-10 hover:opacity-50 transition-opacity'>
              <Image
                src={Close}
                alt='Button close'
              />
            </button>
            <button className='w-12 rotate-180 hover:opacity-50 transition-opacity'>
              <Image
                src={Arrow}
                alt='arrow previous'
              />
            </button>
            {
              <Image
                src={Image01}
                width={700}
                height={450}
                //fill
                //sizes='(max-width: 760px) 100vw, 700px'
                priority
                alt='image'
              />
            }
            <button className='w-12 hover:opacity-50 transition-opacity'>
              <Image
                src={Arrow}
                alt='arrow next'
                width={500}
              />
            </button>
          </div>
        )
      }
    </>
  )
}

//https://unsplash.com/pt-br/@nublson
