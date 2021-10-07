import React from 'react';
import Profile from './profile/Profile';
import myImage from './photo.jpg';

import './App.css';

function App() {
  const commonProps= [{id:'1',
  FullName:'Sofien',
   Bio:'https://www.linkedin.com/in/sofien-yahyaoui-9b69a961/', 
   Profession:'Geologist'}];
   
const handleName=(event)=>{
          event.preventDefault()
 
          alert('Sofien YAHYAOUI')
  };

  return (

      <Profile data={commonProps} handle={handleName} > 
      
      <img src={myImage} alt="pic"/> 

      </Profile>
  );
}

export default App;