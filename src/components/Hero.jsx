import React from 'react';

function Hero({ srcset }) {
  return (
    <div className='relative w-full h-[80vh] flex items-center px-12'>
      {/* Picture element for responsive images */}
      <picture className="absolute inset-0 w-full h-full">
       <source media="(max-width: 600px)" srcSet={srcset.small} />
        <source media="(max-width: 768px)" srcSet={srcset.medium} />
        <source media="(max-width: 1024px)" srcSet={srcset.large} />
        <img
          role="presentation"
          src={srcset.large} // Fallback image
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </picture>
      
      {/* Your Hero content */}
      <h1 className='relative text-4xl text-white z-10'>
        When moments meet good vibes
      </h1>
    </div>
  );
}

export default Hero;