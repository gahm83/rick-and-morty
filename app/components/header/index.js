'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from '../search';
import './styles.css'

const Header = () => {
  return (
    <header>
      <Link
        href="/"
        onClick={() => drawerToggle(false)}>
        <Image src="/images/rick-and-morty.png" width="750" height="229" alt="Rick & Morty"/>
      </Link>
      <Search />
    </header>
  )
}

export default Header;