import React from 'react'
import "./Gallery.css"
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import Loader from '../loader/Loader';
function Gallery({docs,addMore,More,category}) {
    

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2
      };
console.log(More)
  return (
    <>
      <InfiniteScroll
                className='infinitS'
                dataLength={docs.length}
                next={()=>{
                    console.log('Fetching more documents...');
                    addMore(category);
                }}
                hasMore={!More}
                loader={<p>loading</p>}
                
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
                                <motion.video   initial={{opacity:0.4}}  whileInView={{opacity:1}} transition={{duration:0.5, ease:'easeOut'}} layout key={i} src={doc.resources.video} poster={doc.resources.VideoPlaceHolder} className='media bg-slate-500' controls> Your browser does not support the video tag.</motion.video>
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
                                    
                                    />
                                </picture>
                              </div>
                                
                            )
                          }
                        })
                    }
                </Masonry>
        </InfiniteScroll>
    </>
  )
}

export default Gallery