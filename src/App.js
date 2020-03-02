import React, { useState } from 'react';
import Todoapp from './component/Todoapp'
const Todo =()=> {
 
  const [count, setCount] = useState(0);

  return (
    <div>
     < Todoapp />
    </div>
  );
}
export default Todo