import { useEffect, useState } from 'react'

import './App.css'
import apiClient from './api'
import axios from 'axios';
function App() {


 const [data, setData] = useState(null);

 useEffect(() => {
   axios
     .get("http://localhost:8080/api /user/1")
     .then((response) => {
      console.log(response);
       setData(response.data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }, []);

console.log(data);
  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default App
