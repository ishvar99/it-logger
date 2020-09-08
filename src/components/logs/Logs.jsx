import React, { useEffect } from "react"
import LogItem from "./LogItem"
import PreLoader from "../layouts/PreLoader"
import { connect } from "react-redux"
import { getLogs } from "../../action/logActions"
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
  }, [])

  return (
    <div>
      {loading || logs === null ? (
        <PreLoader />
      ) : (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {logs.length === 0 ? (
            <p className="center">No Logs to display...</p>
          ) : (
            logs.map((log) => <LogItem log={log} key={log.id} />)
          )}
        </ul>
      )}
    </div>
  )
}
const mapStateToProps = (state) => ({
  log: state.log,
})
export default connect(mapStateToProps, { getLogs })(Logs)
