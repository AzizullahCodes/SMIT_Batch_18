import React, { useState } from 'react'

const Todo = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todoArr, setTodoArr] = useState([]);

    const addItem = () => {
        const cloneTodos = [...todoArr];
        cloneTodos.push(todoInput);
        setTodoArr(cloneTodos);
        setTodoInput('');
    };

    const deleteItem = (key) => {
        const cloneTodos = [...todoArr];
        cloneTodos.splice(key, 1);
        setTodoArr(cloneTodos);
    };

    return (
        <div>
            <h1> Todo List App in React! </h1>

            <input
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button onClick={addItem}> Add Item </button>

            <ul>
                {
                    todoArr?.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
<button onClick={() => deleteItem(index)}> Delete Item </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Todo