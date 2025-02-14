import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <main className='home'>
    <section className='h-full absolute z-10 flex justify-center items-center'> 
      <div className='flex overflow-hidden gap-10 group'>       
        <div className='flex gap-10  group-hover:paused' >
        <Link to='/hello'>
          <button className='font-Bellefair bg-black w-96 h-96 rounded-full text-transform: uppercase'>
            Hello
          </button> 
        </Link>

        <Link to='/hindi'>
          <button className='font-Bellefair bg-blue-950 w-96 h-96 rounded-full text-transform: uppercase'>
            {/* <Link to='/destination' >Explore</Link> */}
            Namaste
          </button> 
        </Link>

        <Link to='/chinese'>
          <button className='font-Bellefair bg-red-900 w-96 h-96 rounded-full text-transform: uppercase'>
            {/* <Link to='/destination' >Explore</Link> */}
            你好
          </button>
        </Link>
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