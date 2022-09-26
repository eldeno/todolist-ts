import { Check, Trash } from 'phosphor-react';
import styles from './Todo.module.css'

interface TodoProps {
  id: number;
  description: string;
  done: boolean
}

export function Todo({ description, done }: TodoProps) {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.descriptionContainer}>
        <div className={`${styles.checkbox} ${done ? styles.checkboxDone : ''}`}>
          {
            done ? <Check size={18}/> : ''
          }        
        </div>
        <div className={styles.descriptionText}>
          {description}
        </div>
      </div>
      <div className={styles.deleteIcon}>
        <Trash size={24} />
      </div>    
    </div>
  )
}