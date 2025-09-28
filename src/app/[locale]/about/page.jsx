import AboutUs from '@/app/components/sub-componants/AboutUs'
import React from 'react'

export default async function page({params}) {
  const {locale} = await params;
  return (
    <div className='mt-32 min-h-dvh flex flex-col gap-5'>
      <AboutUs locale={locale}/>
    </div>
  )
}
