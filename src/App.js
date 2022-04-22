import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  const addCash = cash => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = cash => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>{cash}</h2>
        <div>
          <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
          <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        </div>
      </header>
    </div>
  );
}

export default App;
