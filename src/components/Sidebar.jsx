import React from 'react'
import SidebarContent from './SidebarContent';
import { useSidebarContext} from '../store';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useSidebarContext();

    return (
        <>
            <div className={`hidden pointer-events-none md:block md:pointer-events-auto fixed top-0 left-0 bottom-0 w-52  duration-300 bg-indigo-300 shadow-2xl
            ${isSidebarOpen ? '' : 'md:-translate-x-full'}`}>
                <div className="flex items-center space-x-5 my-5 h-12 border-b-2 border-indigo-200 pb-4">
                    <span className="ml-4">
                        <box-icon name='camera-movie'
                        ></box-icon>
                    </span>
                    <div className="uppercase font-poppinMd text-gray-800">
                        <p className="text-2xl ">Phimmoi
                            <span className="text-xs">.vn</span>
                        </p>
                    </div>
                </div>
                <SidebarContent />
            </div>
            <div className={`block pointer-events-auto md:hidden md:pointer-events-none absolute top-11 left-0  w-1/2 pb-5 duration-300 shadow-2xl bg-indigo-300 z-10 opacity-0 -translate-y-5
            ${isSidebarOpen ? 'opacity-100 translate-y-0' : ''}`}>
                <div className="flex items-center space-x-5 my-5 h-12 border-b-2 border-indigo-200 pb-4">
                    <span className="ml-4">
                        <box-icon name='camera-movie'
                        ></box-icon>
                    </span>
                    <div className="uppercase font-poppinMd text-gray-800">
                        <p className="text-2xl ">Phimmoi
                            <span className="text-xs">.vn</span>
                        </p>
                    </div>
                </div>
                <div className='md:hidden md:pointer-events-none pl-8 pb-6 border-b-2 border-indigo-200'>
                    <span className='font-poppinSm text-xl text-gray-800'>
                        <a href="#" className="underline hover:text-indigo-700">Đăng nhập
                        </a>
                        /
                        <a href="#" className="underline">
                            <span className='font-poppinSm hover:text-indigo-700'>Đăng ký</span>
                        </a>
                    </span>
                </div>
                <SidebarContent />
            </div>
        </>
    )
}

export default Sidebar