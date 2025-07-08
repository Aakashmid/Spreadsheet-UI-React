import { BsThreeDots } from "react-icons/bs"
import { TbArrowsSplit } from "react-icons/tb"


const TableGroupCell = ({ Text, bgClass, textClass }: { Text: string, bgClass: string, textClass: string }) => {
    return (
        <div className={`table-group-cell flex items-center justify-center h-full gap-2 ${bgClass}`}>
            <TbArrowsSplit className="text-white h-4 w-4 rotate-90"/>
            <p className={`font-medium text-sm ${textClass}`}>{Text}</p>
            <button><BsThreeDots className={`h-3 w-3 ${textClass}`}/></button>
        </div>
    )
}

export default TableGroupCell