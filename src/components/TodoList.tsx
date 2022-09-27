import { useState } from 'react'

import { Todo } from '../components/Todo'

import styles from './TodoList.module.css'

const { listContainer, listHeader, tasksCreated, headerTasksNumber, tasksDone, listBody, emptyListMessage } = styles

import clipboardImageIcon from '../assets/clipboard-image-icon.png'

const todoListArray = [
  {
    id: 1,
    description: 'Comprar ovos',
    done: true
  },
  {
    id: 2,
    description: 'Dar comida pra dog',
    done: false
  },
  {
    id: 3,
    description: 'Dar comida pra dog',
    done: false
  },
  {
    id: 4,
    description: 'Dar comida pra dog',
    done: false
  },
  {
    id: 5,
    description: 'Dar comida pra dog',
    done: false
  },
  {
    id: 6,
    description: 'Dar comida pra dog',
    done: false
  }
]

export function TodoList() {
  const [todos, setTodos] = useState(todoListArray)

  let isEmpty

  if(todos.length === 0) {
    isEmpty = true
  } else {
    isEmpty = false
  }

  const completedTasks = todos.filter(todo => todo.done === true);

  function handleCompleteTask(id:number, done:boolean) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, done: !done}
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)  
  }

  function handleDeleteTask(id:number) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className={listContainer}>
      <div className={listHeader}>
        <p className={tasksCreated}>
          Tarefas criadas
          <span className={headerTasksNumber}>
            {
              todos.length
            }
          </span>
        </p>
        <p className={tasksDone}>
          Concluídas
          <span className={headerTasksNumber}>
            {
              `${completedTasks.length} de ${todos.length}`
            }
          </span>
        </p>
      </div>
      <div className={listBody}>
        {
          isEmpty && 
          <div className={emptyListMessage}>
              <img src={clipboardImageIcon} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
        {
          todos.map(({ id, description, done }) => {             
            return (
              <Todo 
                key={id}
                id={id}
                description={description}
                done={done}
                completeTask={() => handleCompleteTask(id, done)}
                deleteTask={() => handleDeleteTask(id)}
              />
            )            
          })
        }    
      </div>
    </div>
  )
}