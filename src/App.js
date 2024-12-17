import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api'; // ייבוא הפונקציה מהקובץ api.js
import SignUp from './pages/SignUp'; // ייבוא דף ההרשמה
import './App.css'; // ייבוא קובץ עיצוב

function App() {
  const [data, setData] = useState(''); // משתנה סטייט לאחסון המידע מהשרת

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(); // קריאה לפונקציה fetchData
      setData(result); // שמירת התוצאה במשתנה הסטייט
    };

    getData(); // הפעלת הפונקציה
  }, []);

  return (
    <div className="App">
      {/* כותרת ראשית */}
      <h1>FortiTask</h1>
      <p>Server Response: {data || 'Loading...'}</p>

      {/* דף ההרשמה */}
      <SignUp />
    </div>
  );
}

export default App;
