import {Component} from 'react'

import TodoItems from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userTodoItem: initialTodosList}

  deleteItem = id => {
    const {userTodoItem} = this.state
    const unDeletedList = userTodoItem.filter(eachItem => eachItem.id !== id)

    this.setState({userTodoItem: unDeletedList})
  }

  render() {
    const {userTodoItem} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="header">Simple Todos</h1>

          <div>
            <ul className="each-list">
              {userTodoItem.map(eachItem => (
                <TodoItems
                  allTodo={eachItem}
                  key={eachItem.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
