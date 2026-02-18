import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='pl-40 flex text-base bg-gradient-to-r from-[#3500D3] to-[#3910b3] text-white font-mono fixed top-0 w-screen'>
        <div className='ml-4   p-4 italic'>
            <a className=''><Link to="/" className='text-white hover:text-blue-200 transition'>Reviews</Link></a>
        </div>
        <div className='p-4'>
          <nav className='space-x-5'>
            <Link to="/" className='text-white underline-offset-4 hover:underline '>Главная</Link>
            <Link to="/reviews" className='text-white underline-offset-4 hover:underline'>Рецензии</Link>
          </nav>
        </div>
        
        <div className='mr-4 pr-40 p-4 absolute inset-y-0 right-0'>
          <a className='text-white underline-offset-4 hover:underline'>
            <Link to="/auth">Авторизация</Link>
          </a>
        </div>

      </header>
        
    </>
  )
}
