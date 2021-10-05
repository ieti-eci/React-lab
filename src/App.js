import './App.css';
import {TaskItem} from "./TaskItem"
import {useState} from "react";

function App() {
    const [tasks,setTasks] = useState([
        {
            isCompleted: true,
            name: "learn React"
        },
        {
            isCompleted: false,
            name: "Learn Hooks"
        },
        {
            isCompleted: true,
            name: "Keep on keeping on"
        }

    ]);
    const handleTaskChange= () =>{
        console.log("change")
    }
  return (
    <main >
        <form>
          <input type="text" placeholder="Task name"/>
          <button> create task </button>
        </form>
        <ul>
            {tasks.map((task) => {
                return(
                    <TaskItem
                        isChecked={task.isCompleted}
                        taskName={task.name}
                        onTaskChange={handleTaskChange} />
                    );

            })}

        </ul>



    </main>
  );
}

export default App;
