import { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';

const TitleRow = () => {
    const [active, setActive] = useState<number>();
    const view_list: string[] = [
        'All Orders', 'Pending', 'Reviewed', 'Arrived'
    ];

    const handleClickButton = (id: number) => {
        console.log(`View button of  ${view_list[id]} is clicked`);
        setActive(id);
    }
    const handleNewClick = () => {
        console.log('plus clicked')
    }
    return (
        <div className="title-row bg-white w-screen">
            <div className="pl-8 pr-4 pt-1 flex items-center">
                {view_list.map((view_title: string, index: number) => (
                    <button onClick={() => handleClickButton(index)} className={`hover:text-green-olive transition-colors cursor-pointer py-2 px-4 w-fit  ${active === index ? 'text-green-olive border-t-2 border-green-dark bg-green-bg ' : 'text-gray-medium'}`} key={index}>{view_title}</button>
                ))}

                <button onClick={handleNewClick} className="px-2 py-2 cursor-pointer transition-colors  hover:text-green-olive text-gray-medium h-full">
                    <GoPlus className=' h-5 w-5'/>
                </button>
            </div>
        </div>
    )
}

export default TitleRow