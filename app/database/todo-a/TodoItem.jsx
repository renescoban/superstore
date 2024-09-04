"use client"
import { useState } from 'react';

function TodoItem({ text }) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='flex p-2 justify-between items-center'>
            <div
                onClick={toggleCheck}
                className={`cursor-pointer select-none p-2 ${isChecked ? 'line-through text-gray-500' : ''  }`}
            >
            <input type='checkbox'onChange={toggleCheck} checked={isChecked} />
                {text}
            </div>
            <button>X</button>
        </div>
    );
}

export default TodoItem;
