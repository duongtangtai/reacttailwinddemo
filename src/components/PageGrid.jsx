import React, {memo, useEffect} from 'react'
import { useMovieContext, usePageNumContext} from '../store'
import { callSearchAPI } from '../store';
import { useSearchbarContext } from '../store';

//28774bb3
//s=Spider%20man
const PageGrid = () => {
  const [movies, setMovies] = useMovieContext();
  const [searchValue, setSearchValue] = useSearchbarContext();
  const [pageNum, setPageNum] = usePageNumContext();

  useEffect(() => {
    const lastObserver = new IntersectionObserver(entries => {
      const lastMovie = entries[0];
        if (!lastMovie.isIntersecting) {
          return;
        }
        lastObserver.unobserve(lastMovie.target)
        //load new movies
        setPageNum(pageNum + 1);
        callSearchAPI(searchValue, pageNum + 1)
          .then(result => {
            setMovies([...movies, ...result])
            //store to lazy loading
            setSearchValue(searchValue);
        })
    })

    if (movies.length > 0) {
      const movies = document.querySelectorAll(".observerFlag");
      setTimeout(() => {
        lastObserver.observe(movies[movies.length - 1])
      }, 1000)
      
    }
    return () => {
      lastObserver.disconnect();
    }
  }, [movies])

  return (
    <div
      className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-3 py-3 gap-4'
    >
      {movies.length > 0 ? movies.map((movie) => (
        <div key={movie.imdbID} className="relative text-center rounded-lg h-90
          overflow-hidden group observerFlag duration-200">
          <img className='w-full h-full object-cover duration-300 group-hover:scale-110' src={movie.Poster} alt={movie.Title} />
          <div className='absolute bottom-0 pl-6 py-6 inset-x-0 transition text-left font-poppinSm bg-gray-800 opacity-90 text-4xl lg:text-2xl xl:text-xl 2xl:text-base lg:pl-4 lg:py-4 '>
            <p className='text-gray-300 capitalize italic'>{movie.Type}</p>
            <p className='text-gray-100'>{movie.Title}</p>
          </div>
          <div className='hidden md:block absolute bottom-1/2 inset-x-0'>
              <a href='#' className='bg-opacity-0 text-opacity-0 group-hover:text-opacity-100 group-hover:bg-opacity-70 font-poppinSm text-white bg-gray-900  px-3 py-3 rounded-lg duration-300
              '
              >
                Xem phim
              </a>
          </div>
        </div>
      )):
        <div className='text-4xl text-center col-span-full font-poppinLg pt-10'>
           No movies found!
        </div>
      }
    </div>
  )
}

export default memo(PageGrid);