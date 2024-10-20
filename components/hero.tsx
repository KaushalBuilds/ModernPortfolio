import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {
  return (
    <div className='relative overflow-hidden h-screen'>
      {/* Spotlights */}
      <Spotlight className='absolute -top-40 -left-10 md:-left-32 h-screen' fill='white' />
      <Spotlight className='absolute -top-10 left-[70%] h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight className='absolute -top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

      {/* Main Hero Section */}
      <div className="relative flex items-center justify-center h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
      bg-grid-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>

        {/* Content Section */}
        <div className='flex justify-center relative z-10 text-center'>
          <div className='max-w-[89vw] md:max-w-3xl flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-blue-100'>
              Dynamic Web Magic with Next.js
            </h2>
            <TextGenerateEffect
              className='text-[40px] md:text-5xl lg:text-6xl'
              words='Transforming Concept into Seamless User Experience'
            />
           <p className='md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4'>
  Hi, I&apos;m Andrew, a Next.js Developer
</p>

            <a href='#about'>
              <MagicButton 
              title='Show my work' 
              icon={<FaLocationArrow />} 
              position={'right'} 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
