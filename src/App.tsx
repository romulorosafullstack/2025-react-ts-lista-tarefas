// HOOK USEEFFECT
// Hook responsavel pelo ciclo de vida

// 2) Importo o useEffect do react
import { useEffect, useState } from "react"

export default function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [taskEdit, setTaskEdit] = useState({
    enabled: false,
    task: '',
  })

  //3) Crio o state para controlar o test passado no useEffect
  const [test, setTest] = useState(true)

  //1) Crio o useEffect pra esse componente
  // Se o array de dependências [] é declarado com estado vazio/não há dependências, o useEffect é chamado só uma vez quando o componente é montado
  // Se o array de dependências [state] é declarado com um ou mais estados, o useEffect é chamado uma vez ao renderizar o component e a cada vez que o(s) estado(s) passado(s) mudarem
  useEffect(() => {
    console.log("Component renderizado!")
    console.log(test)
  }, [test]) // Executa o useEffect sempre que test mudar



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
      localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input]))
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
    localStorage.setItem("@cursoreact", JSON.stringify(newTasks))
  }


  return (
    <>
      {/* 4) Crio botão que atualiza o state do test */}
      <button onClick={() => setTest(!test)}>Mudar test</button>
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
