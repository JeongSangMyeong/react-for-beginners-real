import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  console.log(
    toDos.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  );
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange} 
          text="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
