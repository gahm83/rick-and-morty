'use client'
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
// import autoAnimate from '@formkit/auto-animate'

const Paginate = ({ actualPages, currentPage, paginate }) => {
  
  const parentRef = useRef(null);
  const pageNumbers = [];
  
  for (let i = 1; i <= actualPages; i++) {
    pageNumbers.push(i);
  }

  // useEffect(() => {
  //   if (parentRef.current) {
  //     autoAnimate(parentRef.current);   
  //   }
  // }, [parentRef])
  
  return (
    <div className='flex items-center justify-center space-x-3'>
      <nav className='bg-slate-900 bg-opacity-80 flex items-center justify-center px-2 rounded-lg'>
      {
          pageNumbers.map(number =>
          <button
            onClick={() => paginate(number)}
            className={classNames('appearance-none font-bold px-2 py-1', {'text-lime-500': currentPage === number})}
            key={number}
            ref={parentRef}>
            {number}
          </button>
        )
      }
      </nav>
    </div>
  )

};

export default Paginate;