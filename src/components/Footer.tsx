import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className='flex bg-[#17000f] text-white font-comfortaa p-4 pl-40 pr-40 pt-15 pb-15'>
        <div className='italic text-lg w-2xl '>
          <a className='font-bold'>harmonix - платформа для тех, кто не равнодушен к музыке и ко всему, что с этим связано. </a>
        </div>
        <div className='flex ml-auto text-sm'>
          <ul className='space-y-2 pr-4'>
            <li><Link to="/policy" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>политика конфиденциальности</Link></li>
            <li><Link to="/terms" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>условия пользования</Link></li>
            <li><Link to="/contacts" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>контакты</Link></li>
          </ul>
          <ul className='space-y-2'>
            <li><Link to="/Auth" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>войти</Link></li>
            <li><Link to="/About" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>о нас</Link></li>
            <li><Link to="/reviews" className='text-white underline-offset-4 decoration-[#78014d] hover:underline'>статьи</Link></li>
            <li className='text-sm text-gray-600'>review @ 2026</li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}
