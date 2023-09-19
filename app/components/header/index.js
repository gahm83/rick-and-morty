'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css'

const Header = () => {
  return (
    <header className='w-10/12 mx-auto'>
      <Link
        href="/"
        onClick={() => drawerToggle(false)}>
        <Image src="/images/rick-and-morty.png" width="750" height="229" alt="Rick & Morty"/>
      </Link>
    </header>
  )
}

export default Header;