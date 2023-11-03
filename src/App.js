import {useEffect, useState} from 'react'
import Child from './Child';

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("Rio");
  const [users, setUsers] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";
  const changeName = (value)=>{
    setName("RIodboss2kdkajp");
  }
  const change = ()=>{
    setIsVisible(!isVisible);
  }

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await fetch(URL);
      result.json().then(json =>{
        setUsers(json);
        console.log(users);
      })
    }
    fetchData()
  },[])
  return (
    <div className="App">
      {/* {isVisible ? <h1>Visible</h1> : <h2>Not Visible</h2>}
      <button onClick={change}>change</button> */}
    {users.map((user,index)=>(
      <Child name={user.name} userName={user.username} email = {user.email} phone = {user.phone} company={user.company.name}/>
    ))}
    </div>
    
  );
}

export default App;
