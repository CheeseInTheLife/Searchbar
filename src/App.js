import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Users} from './components/users';

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      setUsers(users);
    });
  });

  useEffect(() => {
    setFilteredUsers(() => 
      users.filter((user) => user.name.toLowerCase().includes(searchField.toLowerCase()))
    )
  }, [searchField, users]);


  return (
    <div className="App">
      <input type="search" placeholder='Please, search' onChange={(e) => setSearchField(e.target.value)}/>
      {searchField ? <Users users={filteredUsers}/> : null}
    </div>
  );
}

export default App;
