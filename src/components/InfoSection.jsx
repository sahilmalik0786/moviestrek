import React from 'react'

function InfoSection() {
  return (
    <div className='w-full h-screen'>
        <div className='overlay w-full h-full flex flex-col bg-gray-600/50 p-1 '>
            <div className='w-full h-1/2 flex p-3 gap-5 items-center'>
            <div className='md:w-1/2 w-full flex items-center not-md:flex-col  h-full md:p-6 p-2'> <img className='hover:scale-95 transition-all rounded-lg w-full md:h-full h-1/2 object-cover' src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww" alt="" /></div>
          <div className='w-1/2 md:text-xl text-xs   tracking-tight text-accent1'>  <p>Movies, while seemingly modern, have a fascinating history and intriguing aspects. Early silent films were short, with bands often providing live music to accompany the visuals. The first movie theaters opened in 1907. Some movies like "Pulp Fiction" were inspired by behind-the-scenes interactions, while others, like "Come and See," feature actors pretending to be hypnotized during violent scenes. Even seemingly simple elements like the "panorama shot" were invented relatively recently, in 1987</p></div>
            </div>
        </div>
        
    </div>
  )
}

export default InfoSection