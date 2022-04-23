import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addClicksAction } from './store/clicksReducer';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const clicks = useSelector(state => state.metrics.clicks);
  console.log(cash, customers, clicks);

  const addCash = cash => {
    dispatch(addClicksAction(1));
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = cash => {
    dispatch(addClicksAction(1));
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = name => {
    dispatch(addClicksAction(1));
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = id => {
    dispatch(addClicksAction(1));
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Button Clicks: {clicks}</h2>
        <h2>Cash: {cash}</h2>
        <div>
          <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
          <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
          <br />
          <button onClick={() => addCustomer(prompt())}>Add Customer</button>
          <button
            onClick={() => {
              dispatch(addClicksAction(1));
              dispatch(fetchCustomers());
            }}>
            Add Customers From DB
          </button>
        </div>
        {customers.length > 0 ? (
          <div>
            {customers.map(customer => (
              <p key={customer.id} onClick={() => removeCustomer(customer.id)}>
                {customer.name}
              </p>
            ))}
          </div>
        ) : (
          <h4>No Customers</h4>
        )}
      </header>
    </div>
  );
}

export default App;
