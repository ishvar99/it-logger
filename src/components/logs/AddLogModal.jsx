import React, { useState, useEffect } from "react"
// import TechSelectOptions from '../techs/TechSelectOptions';
import { addLog } from "../../action/logActions"
import { getTechs } from "../../action/techActions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import M from "materialize-css/dist/js/materialize.min.js"

const AddLogModal = ({ tech: { techs, loading }, addLog, getTechs }) => {
  useEffect(() => {
    getTechs()
  }, [])
  const [tech, setTech] = useState("")
  const [message, setMessage] = useState("")
  const [attention, setAttention] = useState(false)
  const onSubmit = () => {
    if (message === "") {
      M.toast({ html: "Please enter a message and tech" })
    } else {
      const newLog = {
        message,
        attention,
        tech: tech,
        date: new Date(),
      }

      addLog(newLog)

      M.toast({ html: `Log added by ${tech}` })

      // Clear Fields
      setMessage("")
      setTech("")
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>

              {/* {techs &&
                techs.map((tech) => {
                  return (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  )
                })} */}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

const modalStyle = {
  width: "75%",
  height: "75%",
}
const mapStateToProps = (state) => ({
  log: state.log,
  tech: state.tech,
})
export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal)
