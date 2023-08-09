import { useContext } from "react";
import Context from "./Context";

export const useSidebarContext = () => {
    const {sidebar: [isSidebarOpen, setSidebarOpen]}= useContext(Context);
    return [isSidebarOpen, setSidebarOpen];
}

export const useSearchbarContext = () => {
    const {searchbar: [searchValue, setSearchValue] }= useContext(Context);
    return [searchValue, setSearchValue];
}

export const useMovieContext = () => {
    const {movie: [movies, setMovies]} = useContext(Context);
    return [movies, setMovies];
}

export const usePageNumContext = () => {
    const {page: [pageNum, setPageNum]} = useContext(Context);
    return [pageNum, setPageNum];
}