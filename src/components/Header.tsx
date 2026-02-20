import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header className='pl-40 flex  bg-white shadow-[0_4px_18.9px_-3px_rgba(0,0,0,0.25)] fixed top-0 w-screen'>
        <div className='ml-4 p-4'>
            <a className=''><Link to="/" className='font-bold font-comfortaa text-2xl'>harmonix</Link></a>
        </div>
        <div className='p-4 pl-20 text-lg'>
          <nav className='space-x-5'>
            <Link to="/reviews" className='font-comfortaa underline-offset-4 hover:underline'>статьи</Link>
            <Link to="/new-music" className='pl-5 font-comfortaa underline-offset-4 hover:underline'>новинки</Link>
            <Link to="/community" className='pl-5 font-comfortaa underline-offset-4 hover:underline'>обсуждения</Link>
          </nav>
        </div>
        
        <div className='mr-4 pr-40 p-4 absolute inset-y-0 right-0'>
          <a className='font-comfortaa font-normal text-[18px] text-black border border-black rounded-[12px] w-[91px] h-[30px] flex items-center justify-center bg-transparent hover:underline underline-offset-4'>
            <Link to="/auth">войти</Link>
          </a>
        </div>

      </header>
      {/* <header className='pl-40 flex text-base bg-[#611c3d] text-white font-mono fixed top-0 w-screen'>
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

      </header> */}
        
    </>
  )
}
