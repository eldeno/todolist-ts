import { Check, Trash } from 'phosphor-react';
import styles from './Todo.module.css'

interface TodoProps {
  id: number;
  description: string;
  done: boolean;
  completeTask: (id:number, done: boolean) => void;
}

export function Todo({ description, id, done, completeTask}: TodoProps) {

  function onCompleteTask(id: number, done: boolean) {
    completeTask(id, done)
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
      <div className={styles.deleteIcon}>
        <Trash size={24} />
      </div>    
    </div>
  )
}