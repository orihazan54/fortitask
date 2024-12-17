import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>FortiTask</h1>
      <p>Server Response: {data || 'Loading...'}</p>
      <SignUp />
    </div>
  );
}

export default App;
