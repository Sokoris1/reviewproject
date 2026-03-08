import { Link } from "react-router-dom"
import { Text } from "../components/Text"

export const Home = () => {
  return (
    <>

    <div className="
        mt-16
        top-[57px]
        h-[355px]
        bg-[linear-gradient(273.18deg,#8400FF_6.02%,#BD75FF_78.19%)]
        text-center pt-10 pl-75 pr-75
        text-shadow-lg/20">
          
      <a className="text-white text-[25px] font-comfortaa block">
        harmonix - платформа для тех, кто не равнодушен к <br /> музыке и ко всему, что с этим связано.</a>
      <a className="text-white text-[25px] font-comfortaa block mt-5">
        Альбомы, синглы, саундтреки, концерты, любые звуки,<br />
        которые вас заставляют чувствовать что-то<br /> отличное от безразличия</a>
      <a className="text-white text-[25px] font-comfortaa block mt-5">
        пишите об этом всём на нашей платформе.</a>
        
    </div>
    <div className="pl-48 pt-7 pr-48">
      <Text
        color="primary"
        size="title"
        text="рецензии"
        className="font-bold"
      ></Text>
    </div>
    <div className='flex pt-7 pl-48'> 
      <div className="h-[489px] w-[331px] bg-[#434343]"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
    </div>
    <div className='flex pt-10 pl-48'> 
      <div className="h-[489px] w-[331px] bg-[#434343]"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
    </div>
    <div className="ml-48 mt-5">
      <Link to="/reviews" className='font-comfortaa text-[#8400FF] underline-offset-4 hover:underline font-medium text-xl'>
      читать ещё</Link>
    </div>
    <div className="pl-48 pt-7 pr-48">
      <Text
        color="primary"
        size="title"
        text="статьи"
        className="font-bold"
      ></Text>
    </div>
    <div className='flex pt-7 pl-48'> 
      <div className="h-[489px] w-[331px] bg-[#434343]"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
    </div>
    <div className='flex pt-10 pl-48'> 
      <div className="h-[489px] w-[331px] bg-[#434343]"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
      <div className="h-[489px] w-[331px] bg-[#434343] ml-11"></div>
    </div>
    <div className="ml-48 mt-5">
      <Link to="/reviews" className='font-comfortaa text-[#8400FF] underline-offset-4 hover:underline font-medium text-xl'>
      читать ещё</Link>
    </div>
    <div className="
        mt-7
        top-[57px]
        h-[313px]
        bg-[linear-gradient(273.18deg,#BD75FF_6.02%,#8400FF_78.19%)]
        text-center pt-7 pl-45 pr-45
        ">
      <a className="text-white text-[2rem] font-comfortaa block font-bold">
        обсуждения</a>
      <a className="text-white text-xl font-comfortaa block font-bold mt-8">
        Хотите обсудить новый альбом? Или может историю какой-нибудь группы? Или у вас есть <br />
        совершенная другая тема для обсуждения, связанная с музыкой? Перейдите в раздел <br />обсуждений и создайте свою тему!
        </a>
      <div className="mt-10">
        <Link to="/community" className="font-comfortaa text-xl font-bold 
        text-white border-2 border-white rounded-[20px] w-[285px] h-[30px] 
        bg-transparent hover:underline underline-offset-4 p-2">перейти в обсуждения
        </Link>
      </div>
    </div>
    </>
  )
}
