import type { IconType } from "react-icons"
import { FaLine, FaShareAltSquare, FaShareSquare } from "react-icons/fa"
import { FaRegShareFromSquare, FaShareFromSquare } from "react-icons/fa6"
import { LiaAngleDoubleRightSolid } from "react-icons/lia"
import { LuArrowDownToLine, LuArrowUpDown, LuArrowUpToLine } from "react-icons/lu"
import { PiArrowsSplit, PiLineVertical } from "react-icons/pi"
import { RiFilter3Line } from "react-icons/ri"
import { TbArrowAutofitHeight, TbArrowsSplit } from "react-icons/tb"
import { VscEyeClosed } from "react-icons/vsc"

interface ButtonProps {
    icon: IconType
    text: string
    handleClick: () => void
}

const Row = () => {
    const handleFillterClick = () => {
        console.log('fillter clicked')
    }
    const handleCellViewClick = () => {
        console.log('cell view clicked clicked')
    }
    const handleSortClick = () => {
        console.log('sort clicked')
    }
    const handleHideFieldsClick = () => {
        console.log('sort clicked')
    }

    const handleShareClick = () => {
        console.log('share clicked')
    }
    const handleExportClick = () => {
        console.log('export clicked')
    }
    const handleImportClick = () => {
        console.log('import clicked')
    }

    const control_block_buttons: ButtonProps[] = [
        {
            icon: VscEyeClosed,
            text: "Hide Fields",
            handleClick: handleHideFieldsClick
        },
        {
            icon: LuArrowUpDown,
            text: "Sort",
            handleClick: handleSortClick
        },
        {
            icon: RiFilter3Line,
            text: "Filter",
            handleClick: handleFillterClick
        },
        {
            icon: TbArrowAutofitHeight,
            text: "Cell View",
            handleClick: handleCellViewClick
        }
    ]


    const right_action_buttons: ButtonProps[] = [
        {
            icon: LuArrowDownToLine,
            text: "Import",
            handleClick: handleImportClick
        },
        {
            icon: LuArrowUpToLine,
            text: "Export",
            handleClick: handleExportClick
        },
        {
            icon: FaRegShareFromSquare,
            text: "Share",
            handleClick: handleShareClick
        },
    ]


    return (
        <div className="row-wrapper ">
            <div className="row-content px-2 py-1.5 flex items-center">
                <div className="toolbar flex items-center gap-1 p-2 text-dark">
                    <p className="text-sm`">Tool bar</p>
                    <LiaAngleDoubleRightSolid className="h-4 w-4" />
                </div>
                <PiLineVertical className="h-6 w-auto px-2 text-gray-border" />
                <div className="table-control-block flex items-center grow gap-1">
                    {control_block_buttons.map((btn: ButtonProps, index: number) =>
                        <button className="flex items-center p-2 gap-2 text-dark cursor-pointer " key={index}>
                            <btn.icon className="h-5 w-5 " />
                            <span className=" text-sm">
                                {btn.text}
                            </span>
                        </button>
                    )}
                </div>
                <div className="actions-right flex items-center gap-2 ">
                    {right_action_buttons.map((btn: ButtonProps, index: number) => (
                        <button className="flex items-center p-2 pr-3 gap-2 border border-gray-xlight rounded-lg cursor-pointer hover:bg-gray-100 transition-colors text-gray-darker " key={index}>
                            <btn.icon className="h-5 w-5 " />
                            <span className=" text-sm">
                                {btn.text}
                            </span>
                        </button>
                    ))}

                    <button className="flex items-center py-2 px-6 gap-2  bg-green-dark rounded-lg text-white cursor-pointer">
                        <TbArrowsSplit className="rotate-90 h-5 w-5" />
                        <span className="text-sm font-medium">New Actions</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Row