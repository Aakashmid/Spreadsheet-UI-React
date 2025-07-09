import Row from "./components/row"
import Table from "./components/table"
import TitleRow from "./components/TitleRow"
import Topbar from "./components/topbar"



function App() {
  return (
    <>

      <Topbar />
      <div className="spreadsheet-wrapper w-full relative">
        <Row />
        <Table />
        <div className="absolute z-10 bottom-0p ">
          <TitleRow/>
        </div>
      </div>

    </>
  )
}

export default App
