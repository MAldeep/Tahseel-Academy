import AboutUs from '@/app/components/sub-componants/AboutUs'
import React from 'react'
import { images } from '../../../../public/assets/images';

export default async function page({params}) {
  const {locale} = await params;
  return (
    <div className=' min-h-dvh flex flex-col gap-5'>
      <img src={images.about.src} className='w-full h-[60vh] object-cover'/>
      <AboutUs locale={locale}/>
    </div>
  )
}
