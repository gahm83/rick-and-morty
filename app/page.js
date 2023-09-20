'use client';
import { useState, useEffect } from 'react';
import { useRickStore } from '@/src/store/rickStore';
import useBackground from './hooks/useBackground';
import Header from './components/header';
import Card from './components/card/card';
import Paginate from './components/paginate/paginate';

export default function Homepage() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  //Characters
  const currAPIPage = useRickStore((state) => state.currentPage);
  const nextAPIPAge = useRickStore((state) => state.incrementPage);
  const characterList = useRickStore((state) => state.characters);
  const getCharacters = useRickStore((state) => state.fetchCharacters);
  
  //Search
  const activeSearch = useRickStore((state) => state.activeSearch);
  const resultsList = useRickStore((state) => state.results);

  //Pagination
  const totalPosts = activeSearch ? resultsList.length : characterList.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentResults = resultsList.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const actualPages = (totalPosts % postsPerPage !== 0) ? totalPages - 1 : totalPages;
  
  const currentCharacters = activeSearch
    ? resultsList.slice(indexOfFirstPost, indexOfLastPost)
    : characterList.slice(indexOfFirstPost, indexOfLastPost)

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
          {
            resultsList?.length && <div>Ya tenemos resultados</div>
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