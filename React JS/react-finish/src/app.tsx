import React, { useState } from 'react';
import Header from './somponents/header/header';

const items: string[] = ['computer', 'laptop', 'mouse', 'keyboard'];

const App = () => {

  const [count, setCount] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [todoData, setTodoData] = useState<string[]>(items);

  const handleUpdateCount = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header
        title='Dashboard'
        userName='Ahmed'
      />
      <h1> {count} </h1>
      <button onClick={handleUpdateCount}> Count + </button>

      <ul>
        {
          todoData.map((item: string, index: number) => {
            return <li key={index}> {item} </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;