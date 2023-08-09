import Context from "./Context";
import { useState } from "react";

const Provider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const globalState = {
        sidebar : [isSidebarOpen, setSidebarOpen],
        searchbar : [searchValue, setSearchValue],
        movie : [movies, setMovies],
        page : [pageNum, setPageNum],
    }
    return (
        <Context.Provider value={globalState}>
            {children}
        </Context.Provider>
    )
}

export default Provider;