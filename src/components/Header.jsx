import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='flex text-xl bg-[#272272] text-white font-mono fixed top-0 w-screen'>
        <div className='ml-4   p-4 italic'>
            <a className=''><Link to="/" className='text-white hover:text-blue-200 transition'>Reviews</Link></a>
        </div>
        <div className='p-4'>
          <nav className='space-x-5'>
            <Link to="/" className='text-white hover:text-blue-400 transition'>Главная</Link>
            <Link to="/reviews" className='text-white hover:text-blue-400 transition'>Рецензии</Link>
          </nav>
        </div>
        
        <div className='mr-4 p-4 absolute inset-y-0 right-0'>
          <a className='text-white hover:text-blue-400 transition'>
            <Link to="/auth">Авторизация</Link>
          </a>
        </div>

      </header>
        
    </>
  )
}
