import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Modal({ type, source, currentIndex, poster, onNext, onPrevious, close, length }) {
    const [isZoomed, setIsZoomed] = useState(false);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const mediaVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const handleZoom = (e) => {
        e.stopPropagation();
        setIsZoomed(!isZoomed);
    };

    const handleNext = (e) => {
        onNext();
        setIsZoomed(false); // Reset zoom on next
        e.stopPropagation();
    };

    const handlePrevious = (e) => {
        onPrevious();
        setIsZoomed(false); // Reset zoom on previous
        e.stopPropagation();
    };

    return (
        <motion.div 
            onClick={() => { close(null); }}
            initial="hidden" animate="visible" exit="exit" variants={variants}
            className='z-[200]  fixed top-0 left-0 w-full h-full bg-main overflow-hidden flex items-center justify-center'>
            
            <div className='h-full w-full' onClick={handlePrevious} style={{ cursor: currentIndex === 0 ? "default" : "pointer" }} />
            
            <AnimatePresence mode='wait'>
                {
                    type === "img" ? (
                        <motion.img 
                            key={currentIndex} 
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={mediaVariants} 
                            src={source} 
                            className={`w-full h-auto sm:w-auto shrink-0 transition-height ${isZoomed ? 'sm:h-[95vh]' : 'sm:h-[70vh]'}`} 
                            onClick={(e)=>{e.stopPropagation()}} 
                        />
                    ) : (
                        <motion.video 
                            key={currentIndex} 
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={mediaVariants} 
                            src={source} 
                            className={`md:w-auto shrink-0 ${isZoomed ? 'md:h-[95vh]' : 'md:h-[70vh]'}`} 
                            controls 
                            poster={poster} 
                            onClick={(e)=>{e.stopPropagation()}} 
                        />
                    )
                }
            </AnimatePresence>
            
            <div className='h-full w-full' onClick={handleNext} style={{ cursor: currentIndex === length - 1 ? "default" : "pointer" }} />
            
            <button title='next' onClick={handleNext} className={`absolute top-1/2 -translate-y-1/2 right-0 rounded-l-md py-3 px-2 bg-white/20 hover:bg-white/10 ${currentIndex === length - 1 ? "hidden" : "block"} transition-all duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={`${currentIndex === length - 1 ? "fill-white/40" : "fill-white"} lg:size-12 md:size-9 sm:size-8 size-6`}>
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </button>
            
            <button title='previous' onClick={handlePrevious} className={`absolute top-1/2 -translate-y-1/2 left-0 rounded-r-md py-3 px-2 bg-white/20 hover:bg-white/10 ${currentIndex === 0 ? "hidden" : "block"} transition-all duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={`${currentIndex === 0 ? "fill-white/40" : "fill-white"} lg:size-12 md:size-9 sm:size-8 size-6 rotate-180`}>
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </button>
            
            <button title='zoom' onClick={handleZoom} className={`absolute top-2 right-20 p-2 rounded-md bg-white/20 hover:bg-white/10 transition-all md:block hidden`}>
               {isZoomed ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className='sm:size-8 size-6 fill-white'><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>
                ):(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className='sm:size-8 size-6 fill-white'><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>
                )

               }
            </button>
            
            <button title='close' onClick={(e) => { close(null); e.stopPropagation(); }} className='absolute top-2 right-2 p-2 rounded-md bg-white/20 hover:bg-white/10 transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" className='sm:size-8 size-6 fill-white' viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
            </button>
        </motion.div>
    );
}

export default Modal;
