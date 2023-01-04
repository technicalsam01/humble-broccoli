import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
      .then((resp) => {
        // console.log(resp.data);
        setData(resp.data)
      })

  }, [])
  return (
    <>
      <div className='mainComp'>
        <h1> API DATA </h1>
      </div>
      <table
        border="1px solid"
        cellSpacing="0"
        cellPadding="5"
        style={{ color: "blue", textAlign: "center", marginLeft:"auto",marginRight:"auto",marginTop:"20px",fontFamily:"initial"}}
      >
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
        {data?.slice(0,40).map((item) => {
          const {userId,id,title} = item
          return (
            <>
              <tr>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
              </tr>
            </>
          );
        })}
        ;
      </table>
    </>
  )
}

export default App;
