import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main >
      <input type="text" placeholder="Task name"/>
      <button> create task </button>
      <form>
        <ul>
          <li>
            <input type="checkbox" />
            <span> Learn React</span>
          </li>
          <li>
            <input type="checkbox" />
            <span> Learn Hooks</span>
          </li>
          <li>
            <input type="checkbox" />
            <span> Keep on keeping on</span>
          </li>
        </ul>
      </form>
    </main>
  );
}

export default App;
