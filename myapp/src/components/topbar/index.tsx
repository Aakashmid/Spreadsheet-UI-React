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
        <div className="h-14  flex justify-between items-center px-4 py-2 border-b border-gray-xlight">
            <div className="path flex items-center gap-4">

                <button className="">
                    <RiSideBarFill className="text-green-muted rotate-180  h-6 w-auto" />
                </button>

                <div className="flex items-center gap-4">{path.map((name: string, index: number) => (
                    index === path.length - 1 ? <span className="font-medium" key={index}>{name}</span> :
                        <span key={index} className="text-gray-light flex items-center gap-2">{name} <LiaAngleRightSolid /></span>

                ))}
                </div>
                <button className="">
                    <BsThreeDots className="w-5 h-auto text-gray-light" />
                </button>

            </div>

            <div className="actions-right flex items-center gap-1 ">
                <SearchBar onSubmit={handleSubmit} />
                <div className="relative ">
                    <span className="rounded-full text-xs text-white w-4 h-4 flex items-center justify-center absolute top-1 right-1 bg-green-dark  ring ring-white ">2</span>
                    <button className="p-2 cursor-pointer">
                        <PiBell className="h-6 w-6" />
                    </button>
                </div>
                <div className="user-profile px-3 py-1 flex items-center cursor-pointer gap-2">
                    <div className="image-container">
                        <img src="/images/profile-img.png" alt="profile-image..." className="h-7 w-7 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col ">
                        <p className="name text-sm ">John Doe</p>
                        <p className="text-[11px] text-gray-medium -mt-[2px] truncate max-w-[4rem]" title="john.doe234@gmail.com">
                            john.doe234@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar