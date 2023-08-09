import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageGrid from "./components/PageGrid";
import { useSidebarContext } from "./store";

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useSidebarContext();

    return (
        <>
            <div className="absolute bg-gray-50 inset-0">
                <Sidebar />
                <div className={`pl-0 font-poppinLg duration-300 -z-10
            ${isSidebarOpen ? 'md:pl-52' : 'md:pl-0'}`}>
                    <div className="flex items-center bg-indigo-300">
                        <div className='px-3 py-2'>
                            <button
                                className="hover:-translate-y-0.5"
                                onClick={() => setSidebarOpen(!isSidebarOpen)}
                            >
                                <box-icon name='menu'></box-icon>
                            </button>
                        </div>
                        <Header />
                    </div>
                    <PageGrid />
                </div>
            </div>
        </>
    )
}

export default App;