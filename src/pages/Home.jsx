import React from 'react';
import home from "../assets/home.webp";
import Trail from '../animations/Trail';
import couples from "../assets/couples.webp"
import couples2 from "../assets/couples2.webp"
import couples3 from "../assets/couples3.webp"
import couples4 from "../assets/couples4.webp"
import couples5 from "../assets/couples5.webp"
import couples6 from "../assets/couples6.webp"
import couples7 from "../assets/couples7.webp"
import couples8 from "../assets/couples8.webp"
import couples9 from "../assets/couples9.webp"
import couples10 from "../assets/couples10.webp"
import fashion from "../assets/fash.webp"
import fashion2 from "../assets/fashion2.webp"
import fashion3 from "../assets/fashion3.webp"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gallery from '../components/gallery/Gallery';
function Home() {
  return (
    <>
      <Trail renderImageBuffer={80} images={[fashion2,couples,fashion3,couples2,couples3,fashion,couples4]}>
        <div className='h-[100vh] px-24 pt-24 w-full flex flex-col items-center justify-center relative' style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${home})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
        }}>
          <div className='z-50 flex-1 flex flex-col items-center justify-center gap-2'>
              <h4 className='text-white text-xl text-center'>Good Vibes</h4>
              <h1 className='text-7xl text-stone-200 text-center'>When good time meets precious moments</h1>
              <Link to={"/contact"} className='py-3 px-12 bg-btn-main rounded-sm'>Contact Us</Link>
          </div>
          <div className='z-50 w-full p-2 flex justify-center'>
                    <h4 className='text-white text-center flex flex-col justify-center items-center'>Scroll Down <motion.span  animate={{y: [0, 5, 5, 0],}} transition={{duration: 1,repeat: Infinity,ease: "easeInOut",}} className='block'><svg xmlns="http://www.w3.org/2000/svg" className='size-4 fill-white' viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></motion.span></h4>
                
          </div>
        </div>
      </Trail>
      <motion.div initial={{x:-60,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1, ease:'easeInOut'}} className='text-4xl text-white text-center mt-24'>Where GoodVibes Meet Great Stories: Your Brand, Our Cinematic Magic.</motion.div>
      <div className='p-24'>
          <Gallery images={[couples8,fashion2,couples10,couples,fashion3,couples2,couples3,fashion,couples5,couples4,couples6,couples7,couples9]} />
      </div>
    </>
  );
}

export default Home;
