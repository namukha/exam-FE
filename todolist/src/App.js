import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Task />
    </div>
  );
}

export default App;
