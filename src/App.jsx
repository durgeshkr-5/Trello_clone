
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [todos, setTodos] = useState(() => {
  const savedData = localStorage.getItem("todos");
  return savedData ? JSON.parse(savedData) : {
  pending : ["task -1","Task -2"],
  progress : ["Progessing Task -1", "Progessing-task-2"],
  done : ["Task-Done-1"]
 }
 })

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
 },[todos])




 let [title,setTitle] = useState("") 
 const handleOnClick = () => {
  if(title.trim()){
    setTodos({...todos, pending : [...todos.pending,title]})
  }
  setTitle("")
 }



  return (
    <div className='min-h-screen w-full bg-blue-50'>
      <div className='bg-blue-400 p-5 font-bold text-center text-3xl text-white'>
        <p>Trello Clone</p>
      </div>

      {/*  column */}
      <div className='w-full h-screen grid grid-col-1 md:grid-cols-3 text-center'>
        {/* Todo */}
        <div className='bg-blue-100 '>
          <h3>Todo</h3>
          {/* input box */}
          <div className='w-full flex p-4'>
            <input className='w-[70%] p-3 shadow-md border-none focus:bg-blue-300' type="text" placeholder='add task...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button
            onClick={handleOnClick}
             className='p-3 bg-green-200 hover:bg-emerald-500 cursor-pointer rounded-sm shadow-md flex-1'>Add Task</button>
          </div>
          {/* display card */}
          <div className='p-5 flex flex-col gap-3'>
            {todos.pending.length > 0 && todos.pending.map((todo,index) => (
              <div key={index} className='bg-blue-400 text-white flex justify-center items-center shadow-md p-4 hover:bg-blue-600'>
                <p> {todo}</p>
              </div>
            ))}
          </div>
        </div>
        {/* progress */}
        <div className='bg-amber-100'>
          <h3>Progress</h3>
          {/*  */}
          <div className='p-5 flex flex-col gap-3'>
            {todos.progress.length > 0 && todos.progress.map((todo,index) => (
              <div key={index} className='bg-amber-300 text-white flex justify-center items-center shadow-md p-4 hover:bg-amber-600'>
                <p> {todo}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Done */}
        <div className='bg-green-100'>

          <h3>Done</h3>
          {/*  */}
          <div className='p-5 flex flex-col gap-3'>
            {todos.done.length > 0 && todos.done.map((todo,index) => (
              <div key={index} className='bg-green-400 text-white flex justify-center items-center shadow-md p-4 hover:bg-green-600 '>
                <p> {todo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
