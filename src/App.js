import logo from './logo.svg';
import './App.css';
import {TaskItem} from "./TaskItem"

function App() {
  return (
    <main >
      <input type="text" placeholder="Task name"/>
      <button> create task </button>
      <form>
        <TaskItem isChecked={true} taskName={"Learn react"} />
        <TaskItem isChecked={false} taskName={"Learn Hooks"} />
        <TaskItem isChecked={false} taskName={"Keep on keeping on"} />

      </form>
    </main>
  );
}

export default App;
