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
    <div className='flex flex-col items-center text-center h-200 pt-20'> {/* flex flex-col временное рещение, по идее*/}
      {/* <Text
          color="primary"
          size="medium"
          text="Home"
      ></Text> */}
    </div>
    
    </>
  )
}
