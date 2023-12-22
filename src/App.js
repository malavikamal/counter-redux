import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center p-5 rounded w-100 flex-column" style={{ height: "100vh" }}>
      <div className="d-flex align-items-center justify-content-center p-5 rounded bg-light flex-column">
      <h2 style={{color: "black"}}>Counter Application</h2>
      <Counter />
      </div>
    </div>
  );
}

export default App;
