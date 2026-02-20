import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header className='pl-40 flex text-base bg-[#611c3d] text-white font-mono fixed top-0 w-screen'>
        <div className='ml-4   p-4 italic'>
            <a className=''><Link to="/" className='text-white hover:text-red-200 transition'>Reviews</Link></a>
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
