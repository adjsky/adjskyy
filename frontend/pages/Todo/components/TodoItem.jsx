const React = require("react")
const PropTypes = require("prop-types")

function TodoItem(props) {
  const { item, onChange, onDelete } = props
  return (
    <div className="todo_item">
      <div className="todo_item-row">
        <span className="todo_item-row-name">{item.value}</span>
        <div className="todo_item-row-controls">
          <button
            type="button"
            className="todo_item-row-control"
            onClick={() => onChange(item.id)}
          >
            Change
          </button>
          <button
            type="button"
            className="todo_item-row-control"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

module.exports = TodoItem
