
import './App.css';
import Header from './Header';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Veggies!</h1>
      <div className="up">
        <Header/>
      </div>
      <div className="down">
        <Display/>
      </div>
    </div>
  );
}

export default App;
