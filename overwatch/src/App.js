import React from 'react';
import axios from 'axios';
import HeroList from "./components/Herolist";
import './App.css';

function App() {

  // const [yeet,setYeet] = React.useState(null);

  

  // React.useEffect(()=>{
  //   axios("https://overwatch-api.net/api/v1/hero")
  //   .then((res)=>{
  //     setYeet(res.data.data)
  //   })
  // }, [])
    
    

  return (
    <div className="App">
      Yeet
      <HeroList/>
    {/* {console.log(yeet)} */}
      
    </div>
  );
}

export default App;
