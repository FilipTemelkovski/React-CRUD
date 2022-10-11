import React, { useState } from "react";
import { Training } from './components/Training';

export function App() {

  const [listOfThings, setListOfThings] = useState([
    { id: 1, name: "Pero", lastName: "Perovski", year: 1996 },
    { id: 2, name: "Ivan", lastName: "Ivanovski", year: 1997 },
    { id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998 }
  ]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [year, setYear] = useState(0);

  function deleteItem(id){
    setListOfThings(
      [...listOfThings.filter(elem => elem.id !== id)]
    )
  }

  function addPerson (){
    let novUser = {
      id: Math.floor(Math.random()*100),
      name: name,
      lastName: lastName,
      year: year
    }
    setListOfThings([...listOfThings, novUser])
  }

  return (
    <div>
      <input
        type='text'
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
      />
      <br/>
       <input
        type='text'
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e)=>{setLastName(e.target.value)}}
      />
       <br/>
       <input
        type='number'
        placeholder="Enter Year"
        value={year}
        onChange={(e)=>{setYear(e.target.value)}}
      />
       <br/>
      <button onClick={addPerson}>Submit</button>
      <Training
        listOfThings={listOfThings}
        deleteItem={deleteItem}
      />
    </div>
  )
}