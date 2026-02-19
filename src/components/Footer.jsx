import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className='flex text-base bg-[#1c0000] text-white font-mono p-4 pl-40 pr-40 pt-15 pb-15'>
        <div className='italic text-xl'>
          <a>Genius is the world’s biggest collection of song lyrics and musical knowledge</a>

        </div>
        <div className='flex ml-auto'>
          <ul className='space-y-2 pr-4'>
            <li><Link to="/policy" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>Политика конфиденциальности</Link></li>
            <li><Link to="/terms" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>Условия пользования</Link></li>
            <li><Link to="/contacts" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>Контакты</Link></li>
          </ul>
          <ul className='space-y-2'>
            <li><Link to="/Auth" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>Войти</Link></li>
            <li><Link to="/About" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>О нас</Link></li>
            <li><Link to="/" className='text-white underline-offset-4 decoration-gray-500 hover:underline'>Главная</Link></li>
            <li className='text-sm text-gray-600'>review @ 2026</li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}
