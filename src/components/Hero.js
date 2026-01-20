import HeroImg from '../assets/222.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='flex px-5 py-32 bg-secondary justify-start'>
      <div>
        <img className='w-full' src={HeroImg} alt="Hero" />
      </div>

      <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>
          <span className='text-black'>Smart Gov</span>
        </h1>
        <br /><br /><br />
        
        <p className='pb-5 justify-start'>
          <Link 
            to="/login" 
            className='btn bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700'
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}