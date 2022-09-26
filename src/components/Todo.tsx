import { Check, Trash } from 'phosphor-react';
import styles from './Todo.module.css'

interface TodoProps {
  id: number;
  description: string;
  done: boolean;
  completeTask: (id:number, done: boolean) => void;
  deleteTask: (id: number) => void;
}

export function Todo(
  { description, id, done, completeTask, deleteTask }: TodoProps
  ) {

  function onCompleteTask(id: number, done: boolean) {
    completeTask(id, done)
  }

  function onDeleteTask(id: number) {
    deleteTask(id)
  }

  return (
    <div className={`${styles.todoContainer} ${done && styles.boderLessTodoContainer}`}>
      <div className={styles.descriptionContainer}>
        <div
          className={`${styles.checkbox} ${done ? styles.checkboxDone : ''}`}
          onClick={() => onCompleteTask(id, done)}
        >
          {
            done ? <Check size={18}/> : ''
          }        
        </div>
        <div className={done ? styles.descriptionTextDone : styles.descriptionText}>
          {description}
        </div>
      </div>
      <div className={styles.deleteIcon} onClick={() => onDeleteTask(id)}>
        <Trash size={16} />
      </div>    
    </div>
  )
}