
import React, { useEffect, useState } from "react";
import TaskServ from "../API/TaskServ";
import { getTotalPage } from "../API/utils/pagnation";
import TaskFilter from "../components/TaskFilter";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Loader from "../components/UI/Loader/Loader";
import PaginationPage from "../components/UI/PaginationPage/PaginationPage";
import { useFetch } from "../hooks/useFetch";
import { useTask } from "../hooks/useTask";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';


function Task() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState({ sort: '', serch: '' })
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(9)
  const [page, setPage] = useState(1)

  const [fetch, elPreload, mesError] = useFetch(async () => {
    const [response, responsis, fireResp] = await TaskServ.getAll(limit, page);
    setTasks(response);
    const totalCount = Object.keys(responsis).length;
    setTotalPage(getTotalPage(totalCount, limit))
    console.log(response);
  })

  const sortAndSearchTask = useTask(tasks, filter.sort, filter.serch);

  useEffect(() => {
    fetch()
  }, [filter, page])


  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const removeTask =  async(task) => {
    console.log(task.id);
    await deleteDoc(doc(db, "bd_task", task.id));
    setTasks(tasks.filter(t => (t.id !== task.id)))
  }
  const alterPage = (page) => {
    setPage(page);
    fetch();
  }
  return (
    <div className="app">
      {/* <span className="loader"></span> */}
      <TaskForm create={createTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      {mesError && <h1>Ошибка ${mesError}</h1>}
      {elPreload ? <Loader /> : <TaskList remove={removeTask} tasks={sortAndSearchTask} />}
      <PaginationPage page={page} totalPage={totalPage} alterPage={alterPage} />
    </div>
  );
}

export default Task;