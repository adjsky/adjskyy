const React = require("react")
const PropTypes = require("prop-types")

function TodoInputField(props) {
  const { value, onChange, onEnterPress } = props
  const [error, setError] = React.useState(false)
  return (
    <input
      className={`todo_user-input ${error ? "todo_input-error" : ""}`}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          if (value) {
            onEnterPress()
            setError(false)
          } else {
            setError(true)
          }
        }
      }}
    />
  )
}

TodoInputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func.isRequired,
}

module.exports = TodoInputField
