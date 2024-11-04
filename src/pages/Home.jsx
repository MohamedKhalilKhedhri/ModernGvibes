import React, { useEffect, useState } from 'react';
import home from "../assets/home.webp";
import Trail from '../animations/Trail';
import couples from "../assets/couples.webp"
import couples2 from "../assets/couples2.webp"
import couples3 from "../assets/couples3.webp"
import couples4 from "../assets/couples4.webp"
import fashion from "../assets/fash.webp"
import fashion2 from "../assets/fashion2.webp"
import fashion3 from "../assets/fashion3.webp"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import Gallery from '../components/gallery/Gallery';
import StarButton from '../components/button/StarButton';

function Home() {

  const [docs,setDocs] = useState([])
  const {Gfetch , data , allDataFetched} = useFetch();
  const category ="";

  useEffect(() => {
    const fetchHome = async () => {
      await Gfetch(category);
    };
    fetchHome();
  }, []);

  useEffect(() => {
    setDocs(data);
  }, [data]);

  return (
    <>
      <Trail renderImageBuffer={80} images={[fashion2,couples,fashion3,couples2,couples3,fashion,couples4]}>
      <div className=' h-[80vh]  sm:h-[85vh] md:h-[100vh] px-8 sm:px-10 md:px-12 lg:px-24 pt-24 w-full flex flex-col items-center justify-center relative overflow-hidden'>
          <motion.div initial={{scale:1.2}} animate={{scale:1}} transition={{duration:1.2 ,ease: [0.5, 0, 0, 1]}} className='absolute inset-0' style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${home})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          </motion.div>
            <div className='z-50 flex-1 flex flex-col items-center justify-center gap-4 md:gap-2'>
               
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-stone-200 text-center'>When good time meets precious moments</h1>
                <StarButton route={"ModernGvibes/contact"}>Contact Us</StarButton>
            </div>
            <div className='z-50 w-full py-4 flex justify-center'>
                      <h4 className='text-white text-center flex flex-col justify-center items-center text-xs sm:text-sm md:text-base'>Scroll Down <motion.span  animate={{y: [0, 5, 5, 0],}} transition={{duration: 1,repeat: Infinity,ease: "easeInOut",}} className='block'><svg xmlns="http://www.w3.org/2000/svg" className='size-3 md:size-4 fill-white' viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg></motion.span></h4>
                  
            </div>
          
      </div>
       
      </Trail>
      <motion.div initial={{x:-60,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1, ease:'easeInOut'}} className='text-xl md:text-2xl lg:text-4xl text-white text-center mt-24 px-8 sm:px-10 md:px-12 lg:px-24'>Where GoodVibes Meet Great Stories: Your Brand, Our Cinematic Magic.</motion.div>
      
      <Gallery docs={docs} addMore={Gfetch} category={category} More={allDataFetched} />
    </>
  );
}

export default Home;
