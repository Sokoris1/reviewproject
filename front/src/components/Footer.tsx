import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className='flex bg-black text-white font-comfortaa p-4 pl-40 pr-40 pt-15 pb-15'>
        <div className='italic text-lg w-2xl '>
          <a className='font-bold block'>
            <Link to = "/">
              harmon<span className="text-[#8400FF]">ix</span>
            </Link> - платформа для тех, кто не равнодушен к музыке и ко всему, что с этим связано. 
          </a>
          <a className='text-sm text-gray-600'>harmonix @ 2026</a>
        </div>
        <div className='flex ml-auto text-sm'>
          <ul className='space-y-2 pr-4'>
            <li><Link to="/policy" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>политика конфиденциальности</Link></li>
            <li><Link to="/terms" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>условия пользования</Link></li>
            <li><Link to="/contacts" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>контакты</Link></li>
          </ul>
          <ul className='space-y-2'>
            <li><Link to="/auth" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>войти</Link></li>
            <li><Link to="/about" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>о нас</Link></li>
            <li><Link to="/reviews" className='text-white underline-offset-4 decoration-[#8400FF] hover:underline'>статьи</Link></li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}
