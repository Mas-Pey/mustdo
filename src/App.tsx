import MustDoItem from "./components/MustDoItem"
import { dummyData } from "./data/dummy"

function App() {
  return(
    <main className="py-10 bg-green-900 not-dark:bg-green-200 h-screen">
      <h1 className="font-extrabold text-green-200 not-dark:bg-green-900 text-5xl text-center">My MustDo</h1>
      <h3 className="font-extralight italic text-2xl text-green-200 not-dark:bg-green-900 text-center">(Not to-do, but must-do!)</h3>
      <div className="max-w-lg mx-auto">
        <div className="space-y-3">
          {dummyData.map(list => (
            <MustDoItem mustdo={list}/>
            // <p key={list.id} className="text-lg text-justify">
            //   {list.title}
            // </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
