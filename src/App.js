
import React, { useEffect, useMemo, useState } from "react";
import './styles/style.css'
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import axios from "axios";
import { useTask } from "./hooks/useTask";
import TaskServ from "./API/TaskServ";
import Loader from "./components/UI/Loader/Loader";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState({ sort: '', serch: '' })
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetch, elPreload, mesError] = useFetch( async () => {
    const response = await TaskServ.getAll(limit, page);
    setTasks(response.data)
    console.log(response.headers['x-total-count'])
    setTotalCount(response.headers['x-total-count'])
  })
  const sortAndSearchTask = useTask(tasks, filter.sort, filter.serch)

  useEffect(() => {
    fetch()
  }, [filter])

  
  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const removeTask = (task) => {
    setTasks(tasks.filter(t => (t.id !== task.id)))
  }


  return (
    <div className="app">
      {/* <span className="loader"></span> */}
      <TaskForm create={createTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      {mesError && <h1>Ошибка ${mesError}</h1>}
      {elPreload ? <Loader /> : <TaskList remove={removeTask} tasks={sortAndSearchTask} />}
    </div>
  );
}

export default App;