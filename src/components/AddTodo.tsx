import { PlusCircle } from 'phosphor-react'

import styles from './AddTodo.module.css'

const { form, input, submitButton } = styles

export function AddTodo() {
  return (
    <form className={form}>
      <input className={input} type="text" placeholder="Adicione uma nova tarefa" />
      <button className={submitButton} type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}