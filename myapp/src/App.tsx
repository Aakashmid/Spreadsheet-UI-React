import Row from "./components/top-row"
import Table from "./components/table"
import TitleRow from "./components/TitleRow"
import Topbar from "./components/topbar"



function App() {
  return (
    <>
      <Topbar />
      <div className="spreadsheet-wrapper w-full relative">
        <Row/>  {/* actions row component for table  */}
        <Table />
        <div className="fixed z-10 bottom-0 ">
          <TitleRow/>  
        </div>
      </div>

    </>
  )
}

export default App
