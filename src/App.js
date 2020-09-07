import React, { useEffect, Fragment } from "react"
import { SearchBar } from "./components/layouts/SearchBar"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import "./App.css"
import { Logs } from "./components/logs/Logs"
import AddButton from "./components/layouts/AddButton"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./technicians/AddTechModal"
import TechListModal from "./technicians/ListTechModal"

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <Logs />
      <EditLogModal />
      <AddLogModal />
      <AddTechModal />
      <TechListModal />
      <AddButton />
    </Fragment>
  )
}

export default App
