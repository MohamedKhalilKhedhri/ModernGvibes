import React from 'react'
import "./Gallery.css"
import Masonry from 'react-masonry-css';

function Gallery({images}) {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

  return (
    <>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid "
            columnClassName="my-masonry-grid_column"
        >
            {
                images.map((img,i)=>{

                    return (
                        <img src={img}  key={i} alt={`img ${i}`} title={`img ${i}`} className='media'/>
                    )
                })
            }
        </Masonry>
    </>
  )
}

export default Gallery