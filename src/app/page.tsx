'use client'

import Image01 from '@/assets/photo01.avif'
import Image02 from '@/assets/photo02.avif'
import Image03 from '@/assets/photo03.avif'
import Image04 from '@/assets/photo04.avif'
import Image05 from '@/assets/photo05.avif'
import Image06 from '@/assets/photo06.avif'
import { ThumbImage } from '@/components/thumbImage'

function handleClickOpenImage (index: number) {
  console.log(index)
}

export default function Home() {
  const listImages = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06
  ]
  return (
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
    )
}

//https://unsplash.com/pt-br/@nublson
