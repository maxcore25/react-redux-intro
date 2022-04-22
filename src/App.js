import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>{cash}</h2>
        <div>
          <button>Add Cash</button>
          <button>Get Cash</button>
        </div>
      </header>
    </div>
  );
}

export default App;
