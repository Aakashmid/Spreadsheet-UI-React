import { FaIndianRupeeSign, FaRupeeSign } from "react-icons/fa6";





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
  "In-Process": "bg-yellow-bg text-yellow-700",
  "Complete": "bg-green-mint text-green-800",
  "Need to start": "text-blue-gray bg-gray-200",
  "Blocked": "text-red-accent bg-red-100",
};

const StatusCell = ({ value }: { value: string }) => {
  const style = statusStyles[value] || "bg-gray-100 text-gray-700";
  return (
    <div className={` px-2 py-1 rounded-2xl text-xs font-medium  ${style}   w-fit mx-auto`}>
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
  High: "text-red-500",
  Medium: "text-yellow-600",
  Low: "text-blue-accent",
};

const PriorityCell = ({ value }: { value: string }) => (
  <span className={`font-semibold w-fit mx-auto  ${priorityColors[value] || "text-gray-700"}`}>
    {value}
  </span>
);



// currency cell  ------------------------------------------------------
const CurrencyCell = ({ value }: { value: number }) => (
  <div className="flex items-center justify-end gap-2">
    {value?.toLocaleString("en-IN")}
    <FaIndianRupeeSign className="inline-block text-gray-light h-3 w-2" />
  </div>
);



export { StatusCell, PriorityCell, UrlCell, CurrencyCell, DateCell }