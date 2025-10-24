import { useState } from "react"
import { dummyData } from "./data/dummy"
import AddMustDoForm from "./components/AddMustDoForm"
import MustDoList from "./components/MustDoList"

function App() {
  const [mustdo, setMustDo] = useState(dummyData)

  function setMustdoCompleted(id: number, completed: boolean) {
    setMustDo((prevMustDo) =>
      prevMustDo.map(list => list.id === id ? { ...list, completed } : list)
    )
  }

  function addMustDo(title: string) {
    setMustDo((prevMustDo) => [
      {
        id: prevMustDo.length + 1,
        title,
        completed: false
      },
      ...prevMustDo
    ])
  }

  function deleteMustDo(id: number) {
    setMustDo((prevMustDo) =>
      prevMustDo.filter(list => list.id !== id))
  }

  return (
    <main className="py-10 space-y-0.5 bg-green-900 not-dark:bg-green-200 h-screen overflow-y-auto">
      <h1 className="font-extrabold text-green-200 not-dark:bg-green-900 text-5xl text-center">My MustDo</h1>
      <h3 className="font-extralight italic text-2xl text-green-200 not-dark:bg-green-900 text-center pb-5">(Not to-do, but must-do!)</h3>
      <div className="max-w-lg mx-auto overflow-hidden p-4 space-y-6 rounded-md bg-green-800 not-dark:bg-green-100 border-b-3 border-r-4 border-black">
        <AddMustDoForm onSubmit={addMustDo} />
        <MustDoList mustdo={mustdo} onCompletedChange={setMustdoCompleted} onDelete={deleteMustDo} />
      </div>
    </main>
  )
}

export default App
