import { useState } from "react"

export default function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [taskEdit, setTaskEdit] = useState({
    enabled: false,
    task: '',
  })

  function handleRegister() {
    if (!input) {
      alert("O nome da tarefa não pode estar vazio!")
      return
    }
    
    if (taskEdit.enabled) {
      handleEditSave();
      return
    }

      // Adiciono a nova tarefa ao array
      setTasks([...tasks, input])
      // Limpo o input
      setInput("")
  }

  function handleDelete(item:string) {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask)
  }

  function handleEdit(item:string) {
    setInput(item)
    setTaskEdit({
      enabled: true,
      task: item,
    })
  }

  function handleEditSave() {
    const findTaskIndex = tasks.findIndex((task) => task === taskEdit.task);
    const newTasks = [...tasks];
    newTasks[findTaskIndex] = input;
    setTasks(newTasks);
    setTaskEdit({
      enabled: false,
      task: '',
    })
    setInput("")
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
        {taskEdit.enabled ? "Atualizar Task" : "Adicionar Task"}
      </button>

      <hr />

      {tasks.map((item, index) => (
      <section key={index}>
        <span>{item}</span> 
        <button onClick={() => handleEdit(item)}>Editar</button>
        <button onClick={() => handleDelete(item)}>Excluir</button>
      </section>
      ))}
    </>
  )
}
