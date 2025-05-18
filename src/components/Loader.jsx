import React from 'react'

function Loader(color) {
  return (
    <div className='w-full h-40 flex items-center justify-center'>
        <div className='p-2 bg-gradient-to-r from-accent1 via-slate-700 to-avocado-300 rounded-full h-24 w-32 animate-spin'>
          <div className='h-full w-full bg-slate-900 rounded-full'></div>
        </div>
    </div>
  )
}

export default Loader