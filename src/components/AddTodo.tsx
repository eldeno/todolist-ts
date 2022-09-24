import { PlusCircle } from 'phosphor-react'

import styles from './AddTodo.module.css'

export function AddTodo() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.submitButton} type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}