import './index.css'

const TodoItems = props => {
  const {allTodo, deleteItem} = props
  const {id, title} = allTodo

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="each-todo-con">
      <div className="each-con">
        <p>{title}</p>
        <button className="btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItems
