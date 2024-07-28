import { useEffect, useState } from 'react'

import './App.css'
import apiClient from './api'

function App() {


 const [data, setData] = useState(null);

 useEffect(() => {
   apiClient
     .get("/user/1")
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
