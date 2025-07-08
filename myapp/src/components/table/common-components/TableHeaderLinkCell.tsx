import { LuLink2 } from "react-icons/lu";
import { IoSyncOutline } from "react-icons/io5";

const TableHeaderLinkCell = ({ text }: { text: string }) => (
  <div className="flex bg-gray-border py-1 items-center   justify-start gap-2   px-2  w-full h-full">
    <div className=" bg-gray-xlight rounded px-2 py-1 flex items-center gap-2 h-full">
      <LuLink2 className="text-blue-accent h-4 w-4" />
      <span className="text-gray-darker text-xs font-medium">{text}</span>
    </div>
    <IoSyncOutline  className="text-orange-accent h-4 w-4 cursor-pointer rotate-90" />
  </div>
);

export default TableHeaderLinkCell;