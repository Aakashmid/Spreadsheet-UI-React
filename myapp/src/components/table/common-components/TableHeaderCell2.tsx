import type { IconType } from 'react-icons'

const TableHeaderCell2 = ({ Icon, text, bgClass, textClass }: { Icon?: IconType, text: string, bgClass: string, textClass: string }) => {

    return (
        <div className={`flex gap-2 table-title-cell ${bgClass} items-center px-2   h-full`}>
            {Icon &&
                <Icon className='h-4 w-4 text-gray-light' />
            }
            {text &&
                <span className={`title font-semibold ${textClass} text-xs`}>{text}</span>
            }


        </div>
    )
}

export default TableHeaderCell2