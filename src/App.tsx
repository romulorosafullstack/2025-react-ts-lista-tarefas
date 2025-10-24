import { useState } from "react"

export default function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([
    'Estudar JavaScript',
    'Estudar TypeScript',
    'Comprar React + TypeScript',
  ])

  function handleRegister() {
    if (!input) {
      alert("O nome da tarefa não pode estar vazio!")
      return
    } else {
      // Adiciono a nova tarefa ao array
      setTasks([...tasks, input])
      // Limpo o input
      setInput("")
    }
  }

  function handleDelete(item:string) {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask)
  }

  return (
    <>
      <h1>Lista de Nivelamento Dev | Smartts Utilities</h1>

      <input
        placeholder="Digite o nome da tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRegister}>
        Adicionar Task
      </button>

      <hr />

      {tasks.map((item, index) => (
      <section key={index}>
        <span>{item}</span> 
        <button onClick={() => handleDelete(item)}>Excluir</button>
      </section>
      ))}
    </>
  )
}
