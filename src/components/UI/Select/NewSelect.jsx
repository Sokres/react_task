import React from 'react';

const NewSelect = ({options, defaultOptionValue, onChange, value}) => {
    return (
        <select className='task-select' value={value} onChange={e => onChange(e.target.value)} >
            
            <option disabled  value="">{defaultOptionValue}</option>
            {options.map(el => 
                <option value={el.value} key={el.value} >{el.name}</option>
            )}
        </select>
    );
};

export default NewSelect;