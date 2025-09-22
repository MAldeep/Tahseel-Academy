import AboutUs from '@/app/components/sub-componants/AboutUs'
import React from 'react'

export default function page({params}) {
  const locale = params.locale;
  return (
    <div className='mt-32 min-h-dvh flex flex-col gap-5'>
      <AboutUs locale={locale}/>
    </div>
  )
}
