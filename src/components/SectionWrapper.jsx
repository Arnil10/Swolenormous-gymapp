import React from 'react'

export default function SectionWrapper(props) {

    const {children,header,title,id} = props;
  return (
    
    <section id={id} className='min-h-screen flex flex-col gap-10 '>
      <div className='bg-slate-950 py-8 sm:py-15 flex flex-col gap-1 justify-center items-center'>
        <p className='uppercase font-medium text-base sm:text-lg'>{header}</p>
        <h2 className='font-bold text-4xl sm:text-6xl'>{title[0]} <span className='text-blue-400'>{title[1]}</span> {title[2]}</h2>
      </div>
      <div className='flex flex-col w-full max-w-[800px] mx-auto gap-10 sm:text-base py-4'>{children}</div>

    </section>
  )
}
