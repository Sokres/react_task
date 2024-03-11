import React from 'react';
import TaskItem from "./TaskItem";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TaskList = ({ tasks, remove }) => {
  if (!tasks.length) {
    return (<h2 className="app__noTask" >Заметок нет</h2>)
  }
  return (
    <div className="ontent">
      <TransitionGroup component={'ul'} className='content'>
        {tasks.map((task, index) =>
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames="task"
            >
            <TaskItem remove={remove} task={task} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default TaskList;