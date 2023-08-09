import React, { useRef, useLayoutEffect} from 'react'
import { memo, useState, useMemo} from 'react'
import { useMovieContext, usePageNumContext, useSearchbarContext } from '../store'
import { callSearchAPI } from '../store'

const Header = () => {
  const [searchValue, setSearchValue] = useSearchbarContext();
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useMovieContext();
  const searchRef = useRef();
  const [pageNum, setPageNum] = usePageNumContext();

  useLayoutEffect(()=> {
    callSearchAPI("Spider man", pageNum).then((result) => {
      setMovies(result)
      //store to lazy loading
      setSearchValue("Spider man");
    });
  }, [])

  const handleSearch = () => {
    if (searchInput === "") {
      alert("Xin nhập tên phim muốn tìm!");
      searchRef.current.focus();
      return;
    }
    setPageNum(1);
    callSearchAPI(searchInput, 1).then((result) => {
      setMovies(result)
      //store to lazy loading
      setSearchValue(searchInput);
    });
  }

  return (
    <div className='flex flex-1 items-center'>
      <div className='relative flex-grow pr-8 md:flex-1 '>
        <span className='absolute ml-5 mt-1 hover:cursor-pointer'
          onClick={() => handleSearch()}
        >
          <box-icon name='search-alt-2'></box-icon>
        </span>
        <input type="text" className="bg-gray-100 ml-3 h-8 w-full rounded-xl font-poppinSm placeholder:italic placeholder:text-slate-400 pl-10 text-2xl md:text-xl focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:ring-offset-2" placeholder='Bạn muốn tìm gì?' 
          ref={searchRef}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className='hidden md:flex md:flex-1 justify-end pr-6 '>
        <span className='font-poppinSm text-xl text-gray-800'>
          <a href="#" className="underline hover:text-indigo-700">Đăng nhập
          </a>
          /
          <a href="#" className="underline">
            <span className='font-poppinSm hover:text-indigo-700'>Đăng ký</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default memo(Header)