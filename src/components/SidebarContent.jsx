import React from 'react'
import { category } from '../data/dummy'
import { useState, memo } from 'react'

const SidebarContent = () => {
    const [dropDownArr, setDropDownArr] = useState(Array(category.length).fill(false));
    const handleSidebarClick = (index) => {
        const newArr = Array(category.length).fill(false);
        newArr[index] = !dropDownArr[index];
        setDropDownArr(newArr);
    }

    console.log("render sidebar Content")
    return (
        <div>
            {category.map(({ data, type }, index) => {
                return (
                    <div key={type} className='overflow-y-auto '>
                        <div className='grid grid-cols-5 hover:cursor-pointer py-2 hover:bg-indigo-200 '
                            onClick={() => handleSidebarClick(index)}
                        >
                            <div className='text-xl col-span-3 pl-8 font-poppinMd text-gray-800 '>{type}</div>
                            {data.length > 0 ?
                                <div className={`ml-10 col-span-2 flex justify-center  items-center`}>
                                    <div className={`transition duration-300 
                                ${dropDownArr[index] ? 'rotate-180' : ''}`}>
                                        <box-icon
                                            name='chevron-down'></box-icon>
                                    </div>
                                </div>
                                : ''}
                        </div>
                        {data.length > 0 ?
                            (dropDownArr[index] && <ul>
                                {data.map((e) =>
                                    <li key={e} className='font-poppinSm text-gray-800 text-base'>
                                        <a href="#" className='block pl-9 py-2 hover:bg-indigo-200
                                        transition'>{e}</a>
                                    </li>
                                )}
                            </ul>) : ''
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default memo(SidebarContent);