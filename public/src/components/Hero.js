import HeroImg from '../assets/b.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row px-10 py-32 bg-white items-center min-h-screen relative overflow-hidden'>
      
      {/* Half circle - positioned to cover the text area */}
      <div className='absolute -right-24 top-1/3 w-96 h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-l-full hidden md:block z-0'></div>
      
      {/* Image on left */}
      <div className='md:w-2/5 mb-10 md:mb-0 z-10'>
        <img 
          className='w-full h-auto max-h-[400px] md:max-h-[500px] object-contain' 
          src={HeroImg} 
          alt="Smart Gov Platform" 
        />
      </div>

      {/* Text content on right - positioned over the circle */}
      <div className='md:w-1/2 md:pl-16 z-10 relative'>
        <h1 className='text-black text-5xl md:text-6xl font-bold mb-8'>
          Smart Gov
        </h1>
        
        <div className='mb-12'>
          <Link 
            to="/login" 
            className='bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 inline-block'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}