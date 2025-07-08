import { FaIndianRupeeSign, FaRupeeSign } from "react-icons/fa6";
import TableCell from "./TableCell"




// url cell --------------------------------
const UrlCell = ({ value }: { value: string }) => (
  <a
    href={value}
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-black block max-w-[180px] truncate"
    title={value}
  >
    {value}
  </a>
);


// status cell ------------------------------------------
const statusStyles: Record<string, string> = {
  "In-Progress": "bg-blue-100 text-blue-700",
  "Completed": "bg-green-100 text-green-700",
  "Need to start": "bg-yellow-100 text-yellow-700",
  "Blocked": "bg-red-100 text-red-700",
};

const StatusCell = ({ value }: { value: string }) => {
  const style = statusStyles[value] || "bg-gray-100 text-gray-700";
  return (
    <div className={`px-2 py-1 rounded text-xs font-medium ${style}`}>
        <span className="">
            
        </span>
      {value}
    </div>
  );
};





// date cell ---------------------------------
const DateCell = ({ value }: { value: Date }) => (
  <div>
    {/* {value} */}
    {value instanceof Date && !isNaN(value.getTime())
      ? value.toLocaleDateString()
      : "Invalid "}
  </div>
);




// priority cell  ----------------------------------------------------
const priorityColors: Record<string, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

const PriorityCell = ({ value }: { value: string }) => (
  <div className={`font-semibold flex justify-center ${priorityColors[value] || "text-gray-700"}`}>
    {value}
  </div>
);



// currency cell  ------------------------------------------------------
const CurrencyCell = ({ value }: { value: number }) => (
  <div className="flex items-center justify-end gap-1">
    {value?.toLocaleString("en-IN")}
    <FaIndianRupeeSign className="inline-block text-gray-600 h-3 w-3" />
  </div>
);



export {StatusCell,PriorityCell , UrlCell , CurrencyCell , DateCell }