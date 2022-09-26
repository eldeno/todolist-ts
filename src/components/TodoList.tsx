import { useState } from 'react'

import { Todo } from '../components/Todo'

import styles from './TodoList.module.css'

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

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <p className={styles.tasksCreated}>
          Tarefas criadas
          <span className={styles.headerTasksNumber}>
            0
          </span>
        </p>
        <p className={styles.tasksDone}>
          Concluídas
          <span className={styles.headerTasksNumber}>
            0
          </span>
        </p>
      </div>
      <div className={styles.listBody}>
        {
          isEmpty && 
          <div className={styles.emptyListMessage}>
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
              />
            )            
          })
        }    
      </div>
    </div>
  )
}