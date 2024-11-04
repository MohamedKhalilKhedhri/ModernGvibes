import React, {useEffect, useState } from 'react'
import "./Gallery.css"
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from '../Modal';
import GalleryLoader from '../loader/GalleryLoader';

function Gallery({docs,addMore,More,category}) {
    
    const [modal,setModal]=useState(null)

    const handleClick =(index) => {
      setModal(index);
    };

    const handleNext = () => {
      if (modal < docs.length - 1) {
          setModal(modal + 1);
      }
    };

    const handlePrevious = () => {
        if (modal > 0) {
            setModal(modal - 1);
        }
    };
 
    const breakpointColumnsObj = {
        default: 3,
        700: 2
      };
      useEffect(()=>{
            if(modal === null){
              document.body.style.overflowY ="visible";
            }
            else{
              document.body.style.overflowY ="hidden";
            }
      },[modal])
      console.log("parent rendred ")
  return (
    <>
      <InfiniteScroll
                className='infinitS'
                dataLength={docs.length}
                next={()=>{
                    addMore(category);
                }}
                hasMore={!More}
                loader={<GalleryLoader />}
                
            >
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="gallery"
                    columnClassName="gallery-column"
                >
                    {
                        docs.map((doc,i)=>{

                          if(doc.mediaType ==="vid"){
                            return(
                                <motion.video  onClick={()=>{handleClick(i)}}  initial={{opacity:0.4}}  whileInView={{opacity:1}} transition={{duration:0.5, ease:'easeOut'}} layout key={i} src={doc.resources.video} poster={doc.resources.VideoPlaceHolder} className='media bg-slate-500'> Your browser does not support the video tag.</motion.video>
                            )
                          }
                          else{
                            return (
                              <div className='bg-slate-500' key={i}>
                              <picture className="" >
                                    <source media="(max-width: 600px)" srcSet={doc.resources.small} />
                                    <source media="(max-width: 768px)" srcSet={doc.resources.medium} />
                                    <source media="(max-width: 1024px)" srcSet={doc.resources.large} />
                                    <img
                                        role="presentation"
                                        src={doc.resources.large} // Fallback image
                                        alt={`media n°${i}`}
                                        className="media "
                                        loading='lazy'
                                        onClick={()=>{handleClick(i)}} 
                                    
                                    />
                                </picture>
                              </div>
                                
                            )
                          }
                        })
                    }
                </Masonry>
        </InfiniteScroll>
           <AnimatePresence mode='wait'>
            {modal !== null && (
                  <Modal 
                      type={docs[modal].mediaType} 
                      source={docs[modal].mediaType === "img" ? docs[modal].resources.large : docs[modal].resources.video} 
                      currentIndex={modal} 
                      onNext={handleNext} 
                      onPrevious={handlePrevious}
                      close={handleClick}
                      length={docs.length}
              
                  />
              )}
           </AnimatePresence>
    </>
  )
}

export default Gallery