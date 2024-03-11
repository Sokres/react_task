import { useMemo } from "react";

export const useSortageTask = (tasks, sort) => {
    const sorterTask = useMemo(() => {
        if (sort) {
          return [...tasks].sort((a, b) => typeof a[sort] === 'string' ? a[sort].localeCompare(b[sort]) : a[sort] - b[sort]);
        }
        else {
          return tasks;
        }
      }, [sort, tasks]);
        return sorterTask
    }
export const useTask = (tasks, sort, serch) =>{
    const sorterTask = useSortageTask(tasks, sort)
    const sortAndSearchTask = useMemo(() => {
        return sorterTask.filter(task => task.title.toLowerCase().includes(serch))
      }, [sorterTask, serch])
      return sortAndSearchTask;
}