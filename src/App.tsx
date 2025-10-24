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

      <p>Nome da Tarefa: {input}</p>

      {tasks.map((task, index) => (
      <section>
        {/* key é um identificador único para cada item da lista */}
        <span key={index}>{task}</span>
        <button>Excluir</button>
      </section>
      ))}
    </>
  )
}
