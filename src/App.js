
import React, { useMemo, useState } from "react";
import './styles/style.css'
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'T Задача 1', body: 'yy Нужно выполнить эту задачу', time: '06.03.2024, 13:20', value: 1 },
    { id: 2, title: 'B Задача 2', body: 'gg Нужно выполнить эту задачу', time: '01.03.2024, 13:20', value: 2 },
    { id: 3, title: 'R Задача 3', body: 'oo Нужно выполнить эту задачу', time: '02.03.2024, 13:20', value: 3 },
    { id: 4, title: 'A Задача 4', body: 'pp Нужно выполнить эту задачу', time: '03.03.2024, 13:20', value: 1 },
  ])
  const [filter, setFilter] = useState({ sort: '', serch: '' })

  const sorterTask = useMemo(() => {
    if (filter.sort) {
      return [...tasks].sort((a, b) => typeof a[filter.sort] === 'string' ? a[filter.sort].localeCompare(b[filter.sort]) : a[filter.sort] - b[filter.sort]);
    }
    else {
      return tasks;
    }
  }, [filter.sort, tasks]);

  const sortAndSearchTask = useMemo(() => {
    return sorterTask.filter(task => task.title.toLowerCase().includes(filter.serch))
  }, [sorterTask, filter.serch])
  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const removeTask = (task) => {
    setTasks(tasks.filter(t => (t.id !== task.id)))
  }


  return (
    <div className="app">
      <TaskForm create={createTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList remove={removeTask} tasks={sortAndSearchTask} />

    </div>
  );
}

export default App;