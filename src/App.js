import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo('')
    }
  };
  const enterKeyPress = (event)=>{
    if(event.key === 'Enter'){
      handleAddTodo()
    }
  }
  const deleteList = (id)=>{
    setTodos(toDos.filter((obj)=>obj.id !== id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Sabeeh's Achievement Arena:</h2>

        <h3 style={{color:'red'}}>Transform Your To-Dos into Triumphs! 🌝 ☕ </h3>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          onKeyDown={enterKeyPress}
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.map((obj2) =>
                        obj2.id === obj.id ? { ...obj2, status: e.target.checked } : obj2
                      )
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>deleteList(obj.id)} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1 key={obj.id}>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;