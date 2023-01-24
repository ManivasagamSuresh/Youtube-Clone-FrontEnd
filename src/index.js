import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { Store } from './Components/Redux/Store';
import { UserProvider } from './Components/Context/userContext';
import { Provider } from 'react-redux';
import { store,persistor } from './Components/Redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store = {store}>
{/* <UserProvider> */}
<PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
{/* </UserProvider> */}
</Provider>    
  
    
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
