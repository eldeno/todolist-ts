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
        <>
          { 
            todos.length === 0 &&
            <div className={styles.emptyListMessage}>
              <img src={clipboardImageIcon} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
          {
            todos.map(todo => (
              <Todo 
                key={todo.id}
                id={todo.id}
                description={todo.description}
                done={todo.done}
              />
            ))
          }    
        </> 
      </div>
    </div>
  )
}