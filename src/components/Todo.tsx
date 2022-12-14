import { Check, Trash } from 'phosphor-react';
import styles from './Todo.module.css'

const { todoContainer, borderLessTodoContainer, descriptionContainer, checkbox, checkboxDone, descriptionTextDone, descriptionText, deleteIcon } = styles

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
    <div className={`${todoContainer} ${done && borderLessTodoContainer}`}>
      <div className={descriptionContainer}>
        <div
          className={`${checkbox} ${done ? checkboxDone : ''}`}
          onClick={() => onCompleteTask(id, done)}
        >
          {
            done ? <Check size={18}/> : ''
          }        
        </div>
        <div className={done ? descriptionTextDone : descriptionText}>
          {description}
        </div>
      </div>
      <div className={deleteIcon} onClick={() => onDeleteTask(id)}>
        <Trash size={16} />
      </div>    
    </div>
  )
}