import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <main className='home'>
    <section className='h-full absolute z-10 flex justify-center '> 
      <div className='ml-60 mt-14 flex overflow-hidden gap-10'>       
        <div className='p-8 pl-24 flex gap-28' >

          <div className="relative group h-56">
          <div className="absolute inset-0 bg-slate-900 rounded-full w-52 h-52 blur-xl 
          opacity-0 group-hover:opacity-100 transition duration-75 group-hover:duration-200"></div>
          <Link to='/hello'>
          <button className='relative font-Bellefair bg-white w-52 h-52 rounded-full 
          text-transform: uppercase group-hover:text-gray-700 group-hover:font-semibold transition duration-200'>
            {/* <Link to='/destination' >Explore</Link> */}
            Hello
          </button> 
          </Link>
        </div>
          

        
        <div className="relative group h-56">
          <div className="absolute inset-0 bg-slate-900 rounded-full w-52 h-52 blur-xl 
          opacity-0 group-hover:opacity-100 transition duration-75 group-hover:duration-200"></div>
          <Link to='/hindi'>
          <button className='relative font-Bellefair bg-white w-52 h-52 rounded-full 
          text-transform: uppercase group-hover:text-gray-700 group-hover:font-semibold transition duration-200'>
            {/* <Link to='/destination' >Explore</Link> */}
            Namaste
          </button> 
          </Link>
        </div>


        <div className="relative group h-56">
          <div className="absolute inset-0 bg-slate-900 rounded-full w-52 h-52 blur-xl 
          opacity-0 group-hover:opacity-100 transition duration-75 group-hover:duration-200"></div>
          <Link to='/chinese'>
          <button className='relative font-Bellefair bg-white w-52 h-52 rounded-full 
          text-transform: uppercase group-hover:text-gray-700 group-hover:font-semibold transition duration-200'>
            {/* <Link to='/destination' >Explore</Link> */}
            你好
          </button> 
          </Link>
        </div>
        </div>

        {/* <div className='flex gap-10  group-hover:paused' aria-hidden="true" >
          <button className='font-Bellefair bg-black w-96 h-96 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
          <button className='font-Bellefair bg-blue-950 w-96 h-96 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
          <button className='font-Bellefair bg-gray-900 w-96 h-96 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
          <button className='font-Bellefair bg-green-900 w-96 h-96 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
          <button className='font-Bellefair bg-red-900 w-96 h-96 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
        </div> */}
    </div>
  </section>
</main>
  )
}

export default Homepage