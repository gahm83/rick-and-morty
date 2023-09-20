'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useRickStore } from '@/src/store/rickStore';
import Image from 'next/image';
import Link from 'next/link';

import './styles.css'

const Search = () => {
  
  const currSearchPage = useRickStore((state) => state.currentSearchPage);
  const nextResultsPage = useRickStore((state) => state.incrementSearchPage);
  const searchCharacters = useRickStore((state) => state.searchCharacters);
  const activeSearch = useRickStore((state) => state.activeSearch);
  const toggleSearch = useRickStore((state) => state.toggleSearch);

  const { register, handleSubmit, getValues, formState: { isDirty, isValid }, reset } = useForm();

  const [searchName, setSearchName] = useState();

  useEffect(() => {
    // if (currSearchPage > 1) {
    //   searchCharacters(searchName, currSearchPage);
    // } else {
    searchCharacters(searchName);
    // }
  }, [searchName]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    toggleSearch();
    if (!activeSearch) {
      reset();
      setSearchName(data.search);
    }
  }

  return (
    <form
      className=' bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-full overflow-hidden'
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center">
        <input {...register("search")} placeholder="Search" className="bg-transparent w-48 h-12 outline-none px-4"/>
        <button className="flex items-center justify-center w-12 h-12">
          {
            activeSearch
            ? <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-1/2 h-1/2'>
              <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#FFFFFF"/>
            </svg>
            : <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-1/2 h-1/2'>
              <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        </button>
      </div>
    </form>
  )
}

export default Search;