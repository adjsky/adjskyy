const React = require("react")
const PropTypes = require("prop-types")
const TodoItem = require("./TodoItem.jsx")

class TodoItemList extends React.Component {
  constructor(props) {
    super(props)

    this.generateItemList = this.generateItemList.bind(this)
  }

  generateItemList() {
    const { items, onItemChange, onItemDelete } = this.props
    return items.map((item) => (
      <li>
        <TodoItem key={item.id} item={item} onChange={onItemChange} onDelete={onItemDelete} />
      </li>
    ))
  }

  render() {
    return (
      <ul className="todo_items">
        {this.generateItemList()}
      </ul>
    )
  }
}

TodoItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemChange: PropTypes.func.isRequired,
  onItemDelete: PropTypes.func.isRequired,
}

module.exports = TodoItemList
