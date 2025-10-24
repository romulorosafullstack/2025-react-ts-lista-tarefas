import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([
    'Estudar JavaScript',
    'Estudar TypeScript',
    'Comprar React + TypeScript',
  ])

  return (
    <>
      <h1>Lista de Nivelamento Dev | Smartts Utilities</h1>

      <ul>
        {/* Percorro o array */}
        {tasks.map((task, index) => (
          // key é um identificador único para cada item da lista
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}
