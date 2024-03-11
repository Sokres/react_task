import React from 'react';
import NewSelect from './UI/Select/NewSelect';
import NewInput from './UI/Input/NewInput';

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <NewSelect
                value={filter.sort}
                onChange={selectSort => setFilter({...filter, sort: selectSort})}
                options={[
                    { name: 'по заголовку', value: 'title' },
                    { name: 'по описанию', value: 'body' },
                    { name: 'по дате', value: 'time' },
                    { name: 'по приоритету', value: 'value' },
                ]}
                defaultOptionValue={'сортировака'} />

            <NewInput
                placeholder='Поиск...'
                onChange={e => setFilter({...filter, serch: e.target.value})}
                value={filter.serch} />
        </div>
    );
};

export default TaskFilter;