import { useState } from "react"
import { HiMiniMagnifyingGlass } from "react-icons/hi2"


const SearchBar = ({ onSubmit }: { onSubmit: (query:string) => void }) => {
    const [value, setValue] = useState<string>('')
    return (
        <div className="flex items-center px-3 py-2  rounded-lg bg-gray-bg">
            <button className="">
                <HiMiniMagnifyingGlass className="text-gray-light h-4 w-5"/>
            </button>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSubmit(value)
                    }
                }}
                placeholder="Search within sheet"
                className="w-full ml-2 outline-none border-none placeholder:text-gray-medium"
            />
        </div>
    )
}

export default SearchBar