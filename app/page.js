'use client';
import { useState, useEffect } from 'react';
import { useRickStore } from '@/src/store/rickStore';
import useBackground from './hooks/useBackground';
import Header from './components/header';
import Card from './components/card/card';
import Paginate from './components/paginate/paginate';

export default function Homepage() {

  const currAPIPage = useRickStore((state) => state.currentPage);
  const nextAPIPAge = useRickStore((state) => state.incrementPage);
  const characterList = useRickStore((state) => state.characters);
  const getCharacters = useRickStore((state) => state.fetchCharacters);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCharacters = characterList.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = characterList.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const actualPages = (totalPosts % postsPerPage !== 0) ? totalPages - 1 : totalPages;
  const randomBG = useBackground();
  
  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (currentPage === actualPages) {
      getCharacters(currAPIPage);
    }
  }, [currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber === actualPages) {
      nextAPIPAge();
    }
    setCurrentPage(pageNumber);
  };
  
  return (
    <main className={`bg-${randomBG}`}>
      <Header />
      <section>
        <div className="lg:w-11/12 mx-auto space-y-6">
        {
          currentCharacters
          ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              {
                currentCharacters && currentCharacters.map(item => <Card key={item.id} data={item}></Card>)
              }
            </div>
          : <div className="loading">Loading...</div>
        }
          <Paginate
            actualPages={actualPages}
            currentPage={currentPage}
            paginate={paginate} />
        </div>
      </section>
    </main>
  )
}