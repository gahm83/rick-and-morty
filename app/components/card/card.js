'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
// import autoAnimate from '@formkit/auto-animate'
// import './styles.css'

const Card = (props) => {
  const { data } = props;
  const statusIconClassNames = classNames(
    'block rounded-full w-2 h-2',
    { 'bg-green-600': data.status === 'Alive' },
    { 'bg-red-600': data.status === 'Dead' },
    { 'bg-slate-600': data.status === 'unknown' }
  )
  return (
    <button
      className='bg-slate-900 bg-opacity-80 grid grid-cols-5 items-center backdrop-blur-sm rounded-lg rounded-ee-xl rounded-ss-xl overflow-hidden'
      onClick={() => console.log('Probando')}>
      <div className='col-span-3 place-self-auto text-left p-6 space-y-1'>
        <h2 className='font-bold text-lg leading-none'>{data.name}</h2>
        <p className='flex items-center space-x-2 text-sm'>
          <span className={statusIconClassNames}></span>
          <span className='opacity-60'>{data.status} / {data.species}</span>
        </p>
      </div>
      <div className='col-span-2'>
        <figure className='relative w-full aspect-square'>
          <Image src={data.image} width={256} height={256} className='absolute inset-0 w-full h-full' alt={data.name} />
        </figure>
      </div>
    </button>
  )
}

export default Card;