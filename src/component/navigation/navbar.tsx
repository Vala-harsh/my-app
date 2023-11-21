'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import data from '@/content/header.json'

export const Navbar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)
  const pathname = usePathname()
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const searchParams = useSearchParams()
  // hide the menu when route changes
  useEffect(() => {
    setIsMainMenuOpen(false)
  },  [pathname, searchParams])
  return (
    <div className='bg-white fixed w-full top-0 z-50'>
      <div className='container px-4 mx-auto'>
        <div className='lg:flex hidden py-3 items-center justify-between '>
            
          <Logo data={data.logo} />
            
            <div className='w-1/2 flex justify-end gap-10 '>
            {data.nav.map((item: any, index: any) => (
            <Link key={index} href={item.link}>{item.text}</Link>
            
          ))}
            </div>
           
        
         
          {/* <Link href={data.myaccount.link} target='_blank' className='text-cyan-400 font-semibold'>{data.myaccount.text}</Link> */}
        </div>
        <div className='lg:hidden block'>
          <div className=' flex justify-between items-center py-6 '>
            <Logo data={data.logo} />

            <button
              className="flex flex-col h-12 w-12 justify-center items-center group"
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${isMainMenuOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isMainMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isMainMenuOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                  }`}
              />
            </button>


          </div>
          {isMainMenuOpen ? (
            <div className=' h-screen-without-navbar border-b'>
              <div className="flex h-screen flex-col  items-center divide-y  bg-white">
                {data.nav.map((item: any, index: any) => (
                  <div className=' w-full text-center py-4' key={index}><Link className='text-xl' href={item.link}>{item.text}</Link></div>
                ))}
                {/* <div className=' hover:bg-cyan-100 w-full text-center py-4'> <Link href={data.myaccount.link} className='text-xl text-cyan-400 font-semibold'>{data.myaccount.text}</Link></div> */}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
