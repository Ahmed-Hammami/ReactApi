import './App.css';
import {useEffect,useState} from "react"
import axios from "axios";
function App() {

  const [usersList, setusersList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {

      setusersList(result.data);
      });
  }, []);
console.log(usersList)

  return (
    <div className="App">
      
      {usersList.map(
        x=>
        <div>
        {x.name}
        </div>
      )}
     

    </div>
  );
}

export default App;
