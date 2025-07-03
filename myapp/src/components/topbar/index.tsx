import { BsThreeDots } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { PiBell } from "react-icons/pi";
import { RiSideBarFill } from "react-icons/ri";
import SearchBar from "./SearchBar";

const Topbar = () => {
    const handleSubmit = (query: string) => {
        console.log("Search query submitted:", query);
    }

    const path: string[] = ["Workspace", "Folder 2", 'Spreadsheet3'];

    return (
        <div className="h-14  flex justify-between items-center px-4 py-2 border-b border-gray-200">
            <div className="path flex items-center gap-4">

                <button className="">
                    <RiSideBarFill className="text-[#618666] rotate-180  h-6 w-auto" />
                </button>

                <div className="flex items-center gap-4">{path.map((name: string, index: number) => (
                    index === path.length - 1 ? <span className="font-medium" key={index}>{name}</span> :
                        <span key={index} className="text-[#AFAFAF] flex items-center gap-2">{name} <LiaAngleRightSolid /></span>

                ))}
                </div>
                <button className="">
                    <BsThreeDots className="w-5 h-auto text-[#AFAFAF]" />
                </button>

            </div>

            <div className="actions-right flex items-center gap-1 ">
                <SearchBar onSubmit={handleSubmit} />
                <div className="relative">
                    <span className="rounded-full text-xs text-white w-4 h-4 flex items-center justify-center absolute top-1 right-1 bg-[#4B6A4F]  ring ring-white">2</span>
                    <button className="p-2">
                        <PiBell className="h-6 w-6" />
                    </button>
                </div>
                <div className="user-profile"></div>
            </div>
        </div>
    )
}

export default Topbar