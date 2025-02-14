import React from 'react'

const Chinese = () => {
  return (
    <main className='bg-chinese'>
      <section className='text-white p-14 pt-56 grid grid-cols-2 place-items-center'>
          <div>
            <h4 className='text-lg font-semibold'>Hi! I am Ayush, a first year postgraduate student in IT from India :) 
              I have a bit of an unhealthy obsession with Jojo's bizarre adventure, Drakengard/Nier,
               Breath of the Wild, and recently, as you can probably tell by the layout; Bloodborne!
            Apart from gaming and bashing my head against a wall (programming), I also play flute, 
            and draw!</h4>
          </div>

          <div>
            <h2 className='text-2xl font-extrabold'>Professional skills</h2>
            <ul className='max-w-md space-y-1 list-disc list-inside text-lg font-semibold'>
              <li>Frameworks: React, Svelte</li>
              <li>Languages: JavaScript, Python, C++</li>
            </ul>
          </div>
      </section>
    </main>
  )
}

export default Chinese