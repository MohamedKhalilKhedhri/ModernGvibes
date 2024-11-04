import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import Gallery from '../components/gallery/Gallery';

function Commercials() {
  const [docs,setDocs] = useState([])
  const {Gfetch , data , allDataFetched} = useFetch();
  const category ="commercials";

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
       <div className='mt-28 p-6 flex flex-col items-center justify-center gap-4'>
            <h2 className='text-xl md:text-2xl lg:text-4xl text-white text-center'>Commercials.</h2>
            <hr className='w-11 h-[2px] bg-white' />
            <h3 className='lg:text-2xl md:text-xl text-base text-white text-center'>Where GoodVibes Meet Great Stories: Your Brand, Our Cinematic Magic.</h3>
       </div>
       <Gallery docs={docs} addMore={Gfetch} category={category} More={allDataFetched} />
    </>
  )
}

export default Commercials