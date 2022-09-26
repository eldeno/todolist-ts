import { AddTodo } from './components/AddTodo'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

// import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
