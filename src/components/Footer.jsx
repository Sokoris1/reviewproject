import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className='flex text-xl bg-[#00051c] text-white font-mono p-4 pl-25 pr-25 pt-15 pb-15'>
        <div className='italic'>
          <a>Genius is the world’s biggest collection of song lyrics and musical knowledge</a>

        </div>
        <div className='flex ml-auto'>
          <ul className='space-y-2 pr-4'>
            <li><Link to="/policy" className='text-white hover:text-blue-400 transition'>Политика конфиденциальности</Link></li>
            <li><Link to="/terms" className='text-white hover:text-blue-400 transition'>Условия пользования</Link></li>
            <li><Link to="/contacts" className='text-white hover:text-blue-400 transition'>Контакты</Link></li>
            <li className='text-sm text-gray-600'>review @ 2026</li>
          </ul>
          <ul className='space-y-2'>
            <li><Link to="/Auth" className='text-white hover:text-blue-400 transition'>Войти</Link></li>
            <li><Link to="/About" className='text-white hover:text-blue-400 transition'>О нас</Link></li>
            <li><Link to="/" className='text-white hover:text-blue-400 transition'>Главная</Link></li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}
