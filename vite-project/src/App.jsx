import { useState , useEffect } from 'react'
import Login from "./components/Login";
import Homepage from "./components/Homepage";

import './App.css'


  const App = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    localStorage.removeItem("currentUser");
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setCurrentUser(savedUser);
  }, []);

  return (
    <div>
      {currentUser ? (
        <Homepage username={currentUser} />
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
};

export default App;


  
    
    
  

