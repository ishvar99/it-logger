import React, { useState, useEffect } from "react"
import LogItem from "./LogItem"
import PreLoader from "../layouts/PreLoader"
export const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState()
  useEffect(() => {
    getLogs()
  }, [])
  const getLogs = async () => {
    setLoading(true)
    const res = await fetch("/logs")
    const data = await res.json()
    setLogs(data)
    setLoading(false)
  }
  return (
    <div>
      {loading ? (
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
