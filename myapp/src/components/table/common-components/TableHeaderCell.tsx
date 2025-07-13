import type { IconType } from 'react-icons'
import { LiaAngleDownSolid } from 'react-icons/lia'

const TableHeaderCell = ({ isDropDown = false, Icon, title }: { isDropDown?: boolean, Icon: IconType, title?: string }) => {
    const handleDropDownClick = () => {
        console.log(`dropdown clicked`)
    }

    return (
        <div className="flex gap-2 table-title-cell text bg-gray-xlight items-center  px-2  h-full">
            <div className="flex items-center gap-2 grow">
                <Icon className='h-4 w-4 text-gray-light' />
                {title &&
                    <span className="title font-semibold text-gray-medium text-xs">{title}</span>
                }
            </div>
            {isDropDown &&
                <button className="p-1 cursor-pointer" onClick={handleDropDownClick}>
                    <LiaAngleDownSolid className='h-3 w-3 text-gray-light' />
                </button>
            }
        </div>
    )
}



export default TableHeaderCell