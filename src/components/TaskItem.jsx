import React from 'react';

const TaskItem = (props) => {
    let valueInf = props.task.value;
    let valueInfColor = '';
    if(valueInf === 1){
        valueInfColor = 'contnet__color--red';
    }
    else if(valueInf === 2){
        valueInfColor = 'contnet__color--blue';
    }
    else{
        valueInfColor = 'contnet__color--green';
    }
    return (
        <li className="content__item">
            <span className={ `contnet__color ${valueInfColor}` }></span>
            <h2 className="content__title">{props.task.title}</h2>
            <p className="content__text">{props.task.body}</p>
            <strong className='content__time' >{props.task.time}</strong>
            <div className="content_box-btn">
                <button onClick={() => props.remove(props.task)}  className="content__del"> </button>
            </div>
        </li>
    );
};

export default TaskItem;