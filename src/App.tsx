import AddMustDoForm from "./components/AddMustDoForm"
import MustDoList from "./components/MustDoList"
import MustDoSummary from "./components/MustDoSummary"
import useMustDo from "./hooks/useMustDo"

function App() {
  const {
    mustdo,
    setMustdoCompleted,
    addMustDo,
    deleteMustDo,
    deleteAllMustDo
  } = useMustDo()

  return (
    <main className="py-10 space-y-0.5 bg-linear-to-br from-green-900 to-green-950 not-dark:bg-green-200 h-screen overflow-y-auto">
      <h1 className="font-extrabold text-green-200 not-dark:bg-green-900 text-5xl text-center">My MustDo</h1>
      <h3 className="font-extralight italic text-2xl text-green-200 not-dark:bg-green-900 text-center pb-4">(Not to-do, but must-do!)</h3>
      <MustDoSummary mustdo={mustdo} deleteAllCompleted={deleteAllMustDo} />
      <div className="max-w-lg mx-auto overflow-hidden p-4 space-y-6 rounded-md bg-green-800 not-dark:bg-green-100 border-b-3 border-r-4 border-black">
        <AddMustDoForm onSubmit={addMustDo} />
        <MustDoList mustdo={mustdo} onCompletedChange={setMustdoCompleted} onDelete={deleteMustDo} />
      </div>
    </main>
  )
}

export default App
