import React, { useState } from 'react';
import NewInput from './UI/Input/NewInput';
import Button from "./UI/Button/Button";
// import TaskBoxRadio from './TaskBoxRadio';

const TaskForm = ({ create }) => {

    const [task, setTask] = useState({ title: '', body: '' })
    const [form, setForm] = useState(false);
    const date = Date.now();
    const formatter = new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task,
            id: Date.now(),
            time: formatter.format(date)
        }

        create(newTask)
        setTask({ title: '', body: '' })
        setForm(false)
    }
    const closeForm = (e) => {
        e.preventDefault();
        setForm(false)
    }

    return (
        <div className="boxForm">
            <button className={form ? 'boxForm__btnOpen visually-hidden' : 'boxForm__btnOpen'} onClick={() => setForm(true)} >+ Добавить задачу</button>
            <form className={form ? 'boxForm__newTask ' : 'boxForm__newTask visually-hidden'} active="">
                <NewInput onChange={e => setTask({ ...task, title: e.target.value })} value={task.title} placeholder='Название задачи' />
                <NewInput onChange={e => setTask({ ...task, body: e.target.value })} value={task.body} placeholder='Описание задачи' />
                <div className='form__box-radio'>
                    <label className="form__radio">Срочно
                        <input defaultChecked className='visually-hidden form__radio--input' onChange={() => setTask({ ...task, value: 1 })} type="radio" name="radio-color" />
                        <span className='form__radio--span'></span>
                    </label>
                    <label className="form__radio">Дом
                        <input className='visually-hidden form__radio--input' onChange={() => setTask({ ...task, value: 2 })} type="radio" name="radio-color" />
                        <span className='form__radio--span'></span>
                    </label>
                    <label className="form__radio">Работа
                        <input className='visually-hidden form__radio--input' onChange={() => setTask({ ...task, value: 3 })} type="radio" name="radio-color" />
                        <span className='form__radio--span'></span>
                    </label>
                </div>
                <div>
                    <Button onClick={addNewTask}>Создать задачу </Button>
                    <button className='boxForm__btn-close' onClick={closeForm}>Закрыть</button>
                </div>

            </form>
        </div>
    );
};

export default TaskForm;