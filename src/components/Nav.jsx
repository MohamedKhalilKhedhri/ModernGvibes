import React, { useState } from 'react'
import lightLogo from "../assets/lightLogo.webp"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence} from 'framer-motion'
function Nav() {
    const [exist,setExist] =  useState(false);
   
  return (
  
       <>
        
        <Link to={"/"} className='fixed block z-[100] top-5 left-14'><img src={lightLogo} alt='icon' className='h-24' /></Link>
      
      <div className='z-[100] fixed top-5 right-14 flex gap-2 items-center h-24 '>
       <h2 className=' text-white text-xl'>{exist ? "Exit" : "Menu"}</h2>
       <button className='relative size-16 rounded-full bg-white  flex items-center flex-col gap-[3px]   justify-center overflow-hidden hover:bg-gray-200 ' onClick={()=>{setExist(!exist)}}>
         
         <div className={`h-[2px] bg-gray-700 w-full ${exist ? "rotate-45 translate-y-[3px] " :""} transition-transform duration-500 ease-in-out  scale-x-50`} />
         <div className={`h-[2px] bg-gray-700 w-full ${exist ? "-rotate-45 -translate-y-[2px] " :""} transition-transform duration-500 ease-in-out scale-x-50`} />
     
       </button>
      </div>
        
        <AnimatePresence mode='wait'>
        {exist &&(
            <motion.div initial={{scaleY:0}} animate={{scaleY:1 , transition: { duration: 0.5, ease: "circOut" } }} exit={{scaleY:0 , transition: {delay:0.9, duration: 0.5, ease: "circIn" } }}  className="z-[90] fixed top-0 left-0 bg-[#1f1f1f] h-screen w-full flex flex-col items-center justify-center" style={{originY:1}}>
            
            <ul  className='grid  gap-1  text-white text-5xl place-items-center max-w-[500px]'>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0, duration:0.5, ease:'circIn'}}><Link to={"/"}  onClick={()=>{setExist(false)}}  className='block'>Home</Link></motion.div></li>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0.05, duration:0.5, ease:'circIn'}}><Link onClick={()=>{setExist(false)}} to={"/couples"} className=' block'>Couples</Link></motion.div></li>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0.1, duration:0.5, ease:'circIn'}}><Link  onClick={()=>{setExist(false)}} to={"/fashion"} className=' block'>Fashion</Link></motion.div></li>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0.15, duration:0.5, ease:'circIn'}}><Link  onClick={()=>{setExist(false)}} to={"/commercials"} className=' block'>Commercials </Link></motion.div></li>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0.25, duration:0.5, ease:'circIn'}}><Link onClick={()=>{setExist(false)}} to={"/products"} className=' block'>Products</Link></motion.div></li>
                <li className=' overflow-hidden'><motion.div initial={{y:"100%", rotate:"6deg"}} whileInView={{y:0,rotate:"0deg"}}  exit={{y:"180%",rotate:"6deg"}} className='p-3' transition={{ delay:0.3, duration:0.5, ease:'circIn'}}><Link onClick={()=>{setExist(false)}} to={"/contact"} className=' block'>ContactUs </Link></motion.div></li>
             </ul>
            </motion.div>
        )}
       </AnimatePresence> 
    </>
  )
}

export default Nav