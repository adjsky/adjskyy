const { nanoid } = require("nanoid")
const React = require("react")
const TodoInputField = require("./components/TodoInputField.jsx")
const TodoItemList = require("./components/TodoItemList.jsx")
const TodoItemChangeDialog = require("./components/TodoItemChangeDialog.jsx")
require("./todo.css")

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      items: [],
      idOfItemToChange: null,
    }

    this.onInputEnterPress = this.onInputEnterPress.bind(this)
    this.onDialogConfirm = this.onDialogConfirm.bind(this)
    this.onItemChange = this.onItemChange.bind(this)
    this.onItemDelete = this.onItemDelete.bind(this)
  }

  onInputEnterPress() {
    const { inputValue, items } = this.state
    this.setState({
      items: [{ id: nanoid(), value: inputValue }, ...items],
      inputValue: "",
    })
  }

  onDialogConfirm(result) {
    const { idOfItemToChange, items } = this.state
    const updatedItems = [...items]
    const itemIndex = items.findIndex((item) => item.id === idOfItemToChange)
    updatedItems[itemIndex].value = result
    this.setState({ items: updatedItems, idOfItemToChange: null })
  }

  onItemChange(id) {
    this.setState({ idOfItemToChange: id })
  }

  onItemDelete(id) {
    const { items } = this.state
    this.setState({ items: items.filter((item) => item.id !== id) })
  }

  render() {
    const { items, inputValue, idOfItemToChange } = this.state
    return (
      <div className="todo">
        <TodoInputField
          value={inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          onEnterPress={this.onInputEnterPress}
        />
        <TodoItemList
          items={items}
          onItemChange={this.onItemChange}
          onItemDelete={this.onItemDelete}
        />

        <TodoItemChangeDialog
          show={idOfItemToChange !== null}
          onClose={() => this.setState({ idOfItemToChange: null })}
          onConfirm={this.onDialogConfirm}
        />
      </div>
    )
  }
}

module.exports = Todo
