import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-around items-center gap-4 h-24 bg-darkBlue'>

      <div className='font-bold text-4xl text-hotPink'>2sure</div>
      <div className='flex gap-4'>
        <div className='font-bold text-2xl text-hotPink'>Menu</div>
        <div className='font-bold text-2xl text-hotPink'>About</div>
        <div className='font-bold text-2xl text-hotPink'>Cart</div>

      </div>
      

    </div>
  )
}
